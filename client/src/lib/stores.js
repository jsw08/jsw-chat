import { writable } from 'svelte/store';

let dmode = localStorage.getItem('darkmode') ? true : false;

export const usr = writable({ username: '', admin: false});
export const loggedIn = writable(true);
export const selectDelMode = writable(false)
export const darkmode = writable(dmode);
export const messages = writable([
  {
    id: '',
    usr: 'system',
    msg: 'Welcome to the chat!',
    fromMe: false,
    time: '∞',
  },
]);

darkmode.subscribe((v) => {
  localStorage.setItem('darkmode', v ? 'darkon' : '');
});
