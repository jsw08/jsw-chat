<script>
  export let darkmode;
  import  {Button, TextField}  from 'svelte-materialify';
  import { createEventDispatcher } from 'svelte'
  
  let usr = {name:""}
  const dispatch = createEventDispatcher();
</script>

<form class:darkForm={darkmode} >
  <h6 class="font-weight-bold">JSW-CHAT</h6>
  <br>
  <TextField solo placeholder="Username" bind:value={usr.name}/>
  <div>
    <Button class="red white-text" style="width:45%; display:inline;">cancel</Button>
    <Button class="primary-color" style="width:45%; display:inline;" on:click={() => {dispatch("login", usr)}}>login</Button>
  </div>
</form>

<style>
  form {
    border-radius: 20px;
    width: 70vw;
    max-width: 450px;
    border-width: 2px;
    border: 1px solid lightgray;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
  }

  .darkForm {
    border: 1px solid rgb(52, 52, 52);
  }
</style>