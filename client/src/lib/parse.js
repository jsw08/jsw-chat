let emoji = [];

fetch(
  'https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-annotations-full/annotations/en/annotations.json'
)
  .then((response) => response.json())
  .then((data) => {
    emoji = data.annotations.annotations;
  });

function lcs(a, b) {
  let m = [];
  for (let i = 0; i <= a.length; i++) {
    let r = [];
    for (let j = 0; j <= b.length; j++) r.push(0);
    m.push(r);
  }

  let o = 0;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a.charAt(i - 1) === b.charAt(j - 1)) {
        m[i][j] = i === 1 || j === 1 ? 1 : m[i - 1][j - 1] + 1;
        o = Math.max(o, m[i][j]);
      }
    }
  }

  return o - Math.abs(a.length - b.length) / 100;
}

export function parse(text) {
  let o = [text, ''];
  parseDataURL(o);
  parseLink(o);
  parseEmoji(o);
  parseEmph(o);
  return `${o[0]}${o[1]}`;
}

function parseDataURL(text) {
  if (text[0].substr(0, 10) === 'data:image') {
    text[1] = `<img style="object-fit: scale-down; max-width 40vw; max-height: 50vh;" src="${text[0]}">`;
    text[0] = '';
  }
}

function parseLink(text) {
  let a = text[0].split(/\s|\*/);
  for (let i = 0; i < a.length; i++) {
    if (a[i].match(/^https?:\/\/[^\s]+\.[^\s]+/)) {
      if (a[i].match(/\.(apng|avif|gif|jpg|jpeg|jpe|jif|jfif|png|svg|webp)$/))
        text[1] += `<img style="max-width: 50vw; max-height: 50vh;" src="${a[i]}">`;
      text[0] = text[0].replace(
        a[i],
        `<a href="${a[i].replace(
          /:/g,
          '\\:'
        )}" style="color: #a770f4" target="_blank">${a[i].replace(
          /:/g,
          '\\:'
        )}</a>`
      );
    }
  }
}

function parseEnclose(text, format, regex, func) {
  let a = text[0].split(regex);
  let n = 1;
  for (let i = 1; i < a.length; i++) {
    if (n % 2 === 1) {
      if (
        a[i] !== a[i].trim() ||
        (i === a.length - 1 && text[0].charAt(text.length - 1) !== ':') ||
        !a[i]
      )
        continue;
      text[0] = text[0].replace(`${format}${a[i]}${format}`, func(a[i]));
    }
    n++;
  }
}

function parseEmoji(text) {
  parseEnclose(text, ':', /(?<!\\):/, convertEmoji);
}

function parseEmph(text) {
  parseEnclose(text, '***', /(?<!\\)\*\*\*/, (x) => {
    return `<strong><em>${x}</em></strong>`;
  });

  parseEnclose(text, '**', /(?<!\\)\*\*/, (x) => {
    return `<strong>${x}</strong>`;
  });

  parseEnclose(text, '*', /(?<!\\)\*/, (x) => {
    return `<em>${x}</em>`;
  });
}

function convertEmoji(text, f = lcs) {
  let o = '';
  let m = -1;

  let p = (s) => {
    return s
      .replace(/\s/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .toLowerCase();
  };

  let check = (a, b, k, d = 0) => {
    let r = f(p(a), p(b)) - d;
    if (m === -1 || r > m) {
      m = r;
      o = k;
    }
  };

  let pass = false;

  for (const key in emoji) {
    if (key === '\u{1f600}') pass = true;
    if (!pass) continue;
    check(emoji[key].tts[0], text, key);
    for (let j = 0; j < emoji[key].default.length; j++)
      check(emoji[key].default[j], text, key, emoji[key].default.length / 1000);
  }

  return o;
}
