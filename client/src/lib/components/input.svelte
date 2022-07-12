<script>
    export let socket;
    export let usrname;
    // @ts-ignore
    import {encode} from 'html-entities'
    import {parse} from './../parse.js'
    import { onMount } from 'svelte';
    import {TextField, Dialog, Button } from 'svelte-materialify'
    import {messages} from './../stores.js'

    
    let msgs;
    let value;

    let active = false;
    let passvalue
    let passinput
    let focus;

    onMount(() => {focus = passinput.focus()})
    messages.subscribe(m => {msgs = m})

    const sendMessage = () => {
        if (value.trim()) {
            if (value[0] !== "/") send()
            else {
                switch (value.split(" ")[0]) {
                    case "/login":
                        active = true
                        focus()
                        break;
                    default: 
                        messages.set([...msgs, {id:"", usr:"system",msg:"That is not a valid command.",fromMe:false,time:"Only you can see this,"}])
                        value = ""
                        break;
                }
                value = ""
            }
        }
    }

    const login = () => {
        socket.emit("login", value)
        active = false
    }

    const send = () => {
        let time = new Date()
            let hours = time.getHours().toString()
            let minutes = time.getMinutes().toString()
            if (parseInt(hours) < 10) hours = "0" + hours;
            if (parseInt(minutes) < 10) minutes = "0" + minutes; 

            let id = Math.random().toString(36).substring(1);
            value = parse(encode(value)).trim()
            
            // alert(value + "|")
            let selfmsg = {usr: usrname.toString(), msg: value, id: id, time: hours + ":" + minutes,fromMe: true}        
            socket.emit("message",  {usr: usrname.toString(), msg: value, id: id, time: hours + ":" + minutes,fromMe: false});
            messages.update(i => [...i, selfmsg])
            
            value = ""
    }
    
    
</script>

<form style="position:fixed; bottom:0px; left: 5px;" on:submit={e => {e.preventDefault(); sendMessage()}}>
    <TextField bind:value filled style="width: calc(100vw - 10px);">message</TextField>
</form>

<Dialog bind:this={passinput} bind:active class="pa-4">  
    <TextField solo placeholder="Password" maxlength="10" bind:value={passvalue}/>
    <div>
        <Button class="red white-text" style="width:calc(49% + 2px); display:inline;" on:click={() => {active = false}}>cancel</Button>
        <Button type="submit" class="primary-color" style="width:calc(49% + 2px); display:inline;" on:click={() => {login}}>login</Button>
    </div>
</Dialog>
