<script>
  import  {Button, TextField}  from 'svelte-materialify';
</script>

<form>
  <h6 class="font-weight-bold">JSW-CHAT</h6>
  <br>
  <TextField solo placeholder="Username" />
  <div>
    <Button class="red white-text" style="width:45%; display:inline;">cancel</Button>
    <Button class="primary-color" style="width:45%; display:inline;">login</Button>
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
</style>