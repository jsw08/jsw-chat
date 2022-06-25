<script>
  import LoginPage from './lib/pages/Login.svelte'
  import ChatPage from './lib/pages/Chat.svelte'

  import { onMount } from 'svelte';
  import { loggedIn,darkmode } from './lib/stores.js';
  import { MaterialApp, Button, Icon } from 'svelte-materialify'
  import { mdiBrightness6 } from '@mdi/js';

  let dmode = false
  let login = true;

  darkmode.subscribe(v => {dmode = v})
  loggedIn.subscribe(v => {login = v})

  onMount(() => {
    darkmode.set(localStorage.getItem("darkmode") ? true:false)
  })
</script>

<MaterialApp  theme={dmode ? "dark":"light"}>
  <Button style="position:absolute; right:5px; top:5px;" on:click={() => {darkmode.set(!dmode)}}><Icon path={mdiBrightness6}/></Button>
  <div class="app" class:center={loggedIn}>
    {#if login}
      <LoginPage darkmode={dmode}/>
    {:else}
      <ChatPage/>
    {/if}
  </div>
</MaterialApp>

