<script>

  import LoginPage from './lib/pages/Login.svelte'
  import ChatPage from './lib/pages/Chat.svelte'
  
  import { loggedIn,darkmode } from './lib/stores.js';
  import { MaterialApp, Button, Icon } from 'svelte-materialify'
  import { mdiBrightness6 } from '@mdi/js';

  let dmode = false
  let login = true;

  darkmode.subscribe(v => {dmode = v})
  loggedIn.subscribe(vv => {login = vv})

</script>

<MaterialApp style="width: 100vw; height: 100vh;" theme={dmode ? "dark":"light"}>
  <div class="app" class:center={login}>
      <Button style="position: absolute; right: 0; top:0; margin: 5px 20px;" on:click={() => {darkmode.set(!dmode);}}><Icon path={mdiBrightness6}/></Button>
    {#if login}
      <LoginPage darkmode={dmode}/>
    {:else}
      <ChatPage/>
    {/if}
  </div>
</MaterialApp>

