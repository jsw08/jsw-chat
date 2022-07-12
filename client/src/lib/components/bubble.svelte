<script>
    export let i;
    export let admin;
    admin = true
    import { Icon } from "svelte-materialify";
    import { mdiDeleteCircleOutline } from "@mdi/js";
</script>
<div id={i.id} class:float-left={!i.fromMe} class:white-text={i.fromMe} class:primary-color={i.fromMe} class:float-right={i.fromMe} class:text-align-right={i.fromMe} class="elevation-7 rounded-lg" class:adminMe={admin && i.fromMe} class:admin={admin && !i.fromMe}>
    {@html i.msg}
    <b style="font-size:10px;display:block;">{i.time}&nbsp;<i>{i.usr}</i></b>
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

    .adminMe {
        padding-right: 20px; 
    }

    .admin {
        padding-left: 20px;
    }
</style>
 