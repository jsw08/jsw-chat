<script>
    import { io } from "socket.io-client";
    import {usr, messages} from './../stores.js'
    import Input from './../components/input.svelte'
    import Bubble from './../components/bubble.svelte'


    const socket = io()
    let msgs;
    let usrname;
    usr.subscribe(v => {usrname = v.username })
    messages.subscribe(v => {msgs = v})

    socket.on("bessage", (m) => {
        messages.set([...msgs, m])
        document.querySelector(".messages").scrollTo(0, document.querySelector(".messages").scrollHeight);
    })
</script>

<div style="max-height: calc(100vh - 70px);  min-height: calc(100vh - 70px); overflow:auto;" class="messages">
    {#each msgs as i}
        <div style:clear="both" >
            <Bubble {i}/>
        </div>
    {/each}
</div>
<Input {socket} {usrname}/>