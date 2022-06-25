<script>
  import LoginPage from './lib/pages/Login.svelte'
  import { MaterialApp, Button, Icon } from 'svelte-materialify'
  import { mdiBrightness6 } from '@mdi/js';
  
  let login = true;
</script>

<Button style="position:absolute; right:5px; top:5px;"><Icon path={mdiBrightness6}/></Button>
<MaterialApp  theme='light'>
  <div class="app" class:center={login}>
    {#if login}
      <LoginPage/>
    {:else}

    {/if}
  </div>
</MaterialApp>

