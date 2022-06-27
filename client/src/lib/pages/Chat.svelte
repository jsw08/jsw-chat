<script>
    import {usr, messages} from './../stores.js'
    import Input from './../components/input.svelte'
    import Bubble from './../components/bubble.svelte'
    import { io } from "socket.io-client";

    const socket = io()
    let msgs;
    let usrname;
    usr.subscribe(v => {usrname = v.username })
    messages.subscribe(v => {msgs = v})
</script>
<div style:max-height="calc(100vh - 70px;)" >
    {#each msgs as i}
        <div style:clear="both" >
            <Bubble {i}/>
        </div>
    {/each}
</div>
<Input {socket} {usrname}/>