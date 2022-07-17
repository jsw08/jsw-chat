<script>
    export let socket
    import {messages, username, loggedIn} from '../stores.js'
    //@ts-ignore
    import {Navbar,Input} from 'sveltestrap'

    const commands = {
        "/login" : (v) => {
            alert(`Password: "${v.trim()}"`)
        }
    }

    let value;
    let Messages
    let Username
    let LoggedIn = true

    username.subscribe(v => {Username = v})
    loggedIn.subscribe(v => {LoggedIn = v})
    messages.subscribe(v => {Messages = v})

    const send = () => {
        if (value.trim() && commands[value.trim().split(" ")[0]] === undefined) {
            let time = new Date
            let hours = time.getHours()
            let minutes = time.getMinutes()

            messages.set([...Messages, {username:Username, message: value, fromMe: true, time: `${hours}:${minutes}`}])
            socket.emit('message', {username:Username, message: value, fromMe: false, time: `${hours}:${minutes}`})
            
            value = ""
        } else if (commands[value.trim().split(" ")[0]] !== undefined) {
            let v = value.trim().replace(value.trim().split(" ")[0], "")
            commands[value.trim().split(" ")[0]](v)
        } else if (value.trim().split(" ")[0][0] === "/") {
            alert("That is not a command.")
        }
    }
    
</script>
<Navbar fixed="bottom"><Input disabled={!LoggedIn} on:change={send} bind:value={value} placeholder="Message" /></Navbar>