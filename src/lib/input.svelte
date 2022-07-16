<script>
    import {Navbar,Input} from 'sveltestrap'
    import {messages, username, loggedIn} from '../stores.js'
    import {onMount} from 'svelte'

    let value;
    let Messages
    let Username
    let LoggedIn = true

    username.subscribe(v => {Username = v})
    loggedIn.subscribe(v => {LoggedIn = v})
    messages.subscribe(v => {Messages = v})

    const send = () => {
        alert(Username)
        if (value.trim()) {
            let time = new Date
            let hours = time.getHours()
            let minutes = time.getMinutes()
            messages.set([...Messages, {username:Username, message: value, fromMe: true, time: `${hours}:${minutes}`}])
            value = ""
        }   
    }
    
</script>
<Navbar fixed="bottom"><Input disabled={!LoggedIn} on:change={send} bind:value={value} placeholder="Message" /></Navbar>