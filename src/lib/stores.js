import { writable } from "svelte/store";

let dmode = localStorage.getItem("darkmode") ? true:false
export const usr = writable({username:""})
export const loggedIn = writable(true)
export const darkmode = writable(dmode)

darkmode.subscribe(v => {
    localStorage.setItem("darkmode", v ? "darkon":"")
})
