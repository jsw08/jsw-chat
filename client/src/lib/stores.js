import { writable } from "svelte/store";


let dmode = localStorage.getItem("darkmode") ? true:false

export const usr = writable({username:""})
export const loggedIn = writable(true)
export const darkmode = writable(dmode)
export const messages = writable([{id:"",usr:"jsw",msg:"Hello",fromMe:true,time:"10:30"},{id:"",usr:"some1",fromMe:false,msg:"bonhoer",time:"12:30"}])

darkmode.subscribe(v => {
    localStorage.setItem("darkmode", v ? "darkon":"")
})
