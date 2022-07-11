<script>
    // @ts-ignore
    import { io } from "socket.io-client";
    import {usr, messages} from './../stores.js'
    import Input from './../components/input.svelte'
    import Bubble from './../components/bubble.svelte'
    import {beforeUpdate, afterUpdate} from 'svelte'

    const socket = io()
    let msgs = [];
    let Usr;
    let msgDiv;
    let autoscroll
    messages.subscribe(v => {msgs = v;})
    usr.subscribe(v => {Usr = v })
 
    socket.on("bessage", m => {
            messages.set([...msgs, m])
            msgDiv.scrollTop = msgDiv.scrollHeight;  
    })

    socket.on("login", (m) => {
      if (m) {
        usr.set({username: Usr.username, admin: true})
        alert("Became admin")
      }
    })
    
	beforeUpdate(() => {
		autoscroll = msgDiv && (msgDiv.offsetHeight + msgDiv.scrollTop) > (msgDiv.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) msgDiv.scrollTo(0, msgDiv.scrollHeight);
	});


</script>

<div bind:this={msgDiv} style="max-height: calc(100vh - 70px);  min-height: calc(100vh - 70px); overflow:auto;" class="messages">
    {#each msgs as i}
        <Bubble {i}/>
    {/each}
</div>
<Input {socket} usrname={Usr.username}/>

<style>
.messages::-webkit-scrollbar {
  background: transparent; /* Chrome/Safari/Webkit */
  width: 0px;
}
    
.messages {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
}

</style>