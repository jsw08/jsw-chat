<script>
    export let i;
</script>
<div  class:float-left={!i.fromMe} class:white-text={i.fromMe} class:primary-color={i.fromMe} class:float-right={i.fromMe} class="elevation-7 rounded-lg">
    {i.msg}
    <b style="font-size:10px;display:block;">{i.time}&nbsp;{i.usr}</b>
</div>
<style>
    div {
        padding: 5px 10px;
        font-size: 16pt;
        max-width: 30vw;
        margin:  5px 20px;
        display:block;
        overflow-wrap: break-word;
    }
</style>