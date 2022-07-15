import { writable } from "svelte/store";

export const loggedIn = writable(false);
export const username = writable("I'm a hacker, I bypassed the login system lol.")
export const admin = writable(false)
export const messages = writable([{username:"system",message:"Welcome to the jsw-chat!",time:"Only you can see this,",fromMe:false}])
export const darkMode = writable(true)


darkMode.subscribe(v => {localStorage.setItem("darkMode", v.toString())})
switch(localStorage.getItem("darkMode")) {
    case "false":
        darkMode.set(false)
        break;
    default: 
        darkMode.set(true)  
}
