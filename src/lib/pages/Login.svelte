<script>
  import  {Button, TextField}  from 'svelte-materialify';
</script>

<form>
<h6>JSW-CHAT</h6>
<br>
<TextField solo placeholder="Username" />
<Button style="width:100%">login</Button>
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