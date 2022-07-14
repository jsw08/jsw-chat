<script>
    export let i;
    export let admin;
    export let socket

    import { Button, Icon } from "svelte-materialify";
    import { mdiDeleteCircleOutline } from "@mdi/js";
    import { selectDelMode } from "./../stores.js"

    let delmode = false;
    selectDelMode.subscribe(v => {delmode = v})
</script>
<div class:float-left={!i.fromMe} class:white-text={i.fromMe} class:primary-color={i.fromMe} class:float-right={i.fromMe} class:text-align-right={i.fromMe} class="elevation-7 rounded-lg">
    {@html i.msg}
    <b style="font-size:10px;display:block;">{i.time}&nbsp;<i>{i.usr}</i></b>
    {#if admin && delmode}
        <Button on:click={() => {socket.emit("delete", i.id); selectDelMode.set(false)}}><Icon path={mdiDeleteCircleOutline}/></Button>
    {/if}
</div>
<style>
    div {
        padding: 5px 10px;
        font-size: 16pt;
        max-width: 40vw;
        margin:  5px 20px;
        display:block;
        overflow-wrap: break-word;
        clear: both;
    }

    .text-align-right {
        text-align: right;
    }

</style>
 