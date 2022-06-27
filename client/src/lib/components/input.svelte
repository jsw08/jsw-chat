<script>
    import {TextField} from 'svelte-materialify'
    import {messages} from './../stores.js'
    export  let socket;;
    export let usrname;
    
    let value;

    const sendMessage = () => {
        let time = new Date()
        let hours = time.getHours()
        let minutes = time.getMinutes()
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes; 

        let id = Math.random().toString(36).substring(1);
        let selfmsg = {usr: usrname.toString(), msg: value, id: id, time: hours + ":" + minutes,fromMe: true}
        
        socket.emit("message",  {usr: usrname.toString(), msg: value, id: id, time: hours + ":" + minutes,fromMe: false});
        messages.update(i => [...i, selfmsg])
        
        value = ""

    }
    
</script>

<!-- <TextField solo placeholder="message" style="width: calc(100vw - 10px); position: absolute; bottom:5px; left: 5px;"/> -->
<form style="position:fixed; bottom:0px; left: 5px;" on:submit={e => {e.preventDefault(); sendMessage()}}>
    <TextField bind:value filled style="width: calc(100vw - 10px);">message</TextField>
</form>