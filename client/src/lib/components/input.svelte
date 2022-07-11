<script>
    // @ts-ignore
    import {encode} from 'html-entities'
    import {parse} from './../parse.js'
    // @ts-ignore
    import {TextField} from 'svelte-materialify'
    import {messages} from './../stores.js'
    export  let socket;
    export let usrname;
    
    let value;

    const sendMessage = () => {
        if (value.trim()) {
            if (value[0] !== "/") send()
            else {
                switch (value.split(" ")[0]) {
                    case "/login":
                        socket.emit("login",value.split(" ")[1])
                        break;
                }
                value = ""
            }
        }
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