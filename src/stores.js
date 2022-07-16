import { writable } from "svelte/store";

export const loggedIn = writable(false);
export const username = writable("I'm a hacker, I bypassed the login system lol.")
export const admin = writable(false)
export const messages = writable([{username:"system",message:"Welcome to the jsw-chat!",time:"Only you can see this",fromMe:false,id:"systemMsg"}])
