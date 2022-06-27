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

    socket.on("bessage", (m) => {
        messages.set([...msgs, m])
    })
</script>

<div style="max-height: calc(100vh - 70px);  min-height: calc(100vh - 70px); overflow:auto;" >
    {#each msgs as i}
        <div style:clear="both" >
            <Bubble {i}/>
        </div>
    {/each}
</div>
<Input {socket} {usrname}/>