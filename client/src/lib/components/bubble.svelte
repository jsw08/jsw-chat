<script>
    export let i;
    import {encode} from 'html-entities'

    i.msg = encode(i.msg)
    const urls = i.msg.match(/\b(https?:\/\/.*?\.[a-z]{2,4}\b)/g);
    var msg = i.msg;

    if (urls) {
        console.log(true)
        for (let url in urls) {
            url = urls[url]
            console.log(url)
            msg.replace(url, `<a href="${url}">${url}</a>`)
        }
    }
</script>
<div  class:float-left={!i.fromMe} class:white-text={i.fromMe} class:primary-color={i.fromMe} class:float-right={i.fromMe} class="elevation-7 rounded-lg">
    {@html msg}
    <b style="font-size:10px;display:block;">{i.time}&nbsp;{i.usr}</b>
</div>
<style>
    div {
        padding: 5px 10px;
        font-size: 16pt;
        max-width: 30vw;
        margin:  5px 20px;
        display:block;
        overflow-wrap: break-word;
    }
</style>