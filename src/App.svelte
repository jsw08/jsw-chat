<script>
  import LoginPage from './lib/pages/Login.svelte'
  import { MaterialApp } from 'svelte-materialify'
  let login = true;
</script>

<MaterialApp  theme='light'>
  <div class="app" class:center={login}>
    {#if login}
      <LoginPage/>
    {:else}

    {/if}
  </div>
</MaterialApp>

