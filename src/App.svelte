<script>
  import LoginPage from './lib/pages/Login.svelte'
  import ChatPage from './lib/pages/Chat.svelte'

  import { MaterialApp, Button, Icon } from 'svelte-materialify'
  import { mdiBrightness6, mdiYeast } from '@mdi/js';
  import { onMount } from 'svelte'

  let login = true;
  let darkmode = true;
  let usr = {}
  let ls = {setItem: (y, yy) => {}};

  $: setLS(darkmode)
  let setLS = (theme) => {ls.setItem("theme", darkmode ? "darkon":"")}

  onMount(() => {
    ls = window.localStorage
    darkmode = localStorage.getItem("theme") ? true:false
  })
</script>

<MaterialApp  theme={darkmode ? "dark":"light"}>
  <Button style="position:absolute; right:5px; top:5px;" on:click={() => {darkmode = !darkmode}}><Icon path={mdiBrightness6}/></Button>
  <div class="app" class:center={login}>
    {#if login}
      <LoginPage on:login={x => {x = x.detail; if (x.name) {usr = x; login = false;}}} darkmode={darkmode}/>
    {:else}
      <ChatPage/>
    {/if}
  </div>
</MaterialApp>

