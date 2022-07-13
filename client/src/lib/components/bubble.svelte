<script>
    export let i;
    export let admin;
    export let socket

    import { Icon } from "svelte-materialify";
    import { mdiDeleteCircleOutline } from "@mdi/js";
    import { selectDelMode } from "./../stores.js"

    let delmode = false;
    let hide = false; 

    selectDelMode.subscribe(v => {delmode = v})

    const click = () => {
        if (delmode && admin) {
           if (confirm("Are you sure you want to delete this message?")) socket.emit("delete", i.id)
        }
    }

    socket.on("delete", id => {
        if (i.id == id) {
            hide = true;
        }
    })
</script>
<div class:hide class:float-left={!i.fromMe} class:white-text={i.fromMe} class:primary-color={i.fromMe} class:float-right={i.fromMe} class:text-align-right={i.fromMe} class="elevation-7 rounded-lg" class:adminMe={admin && i.fromMe} class:admin={admin && !i.fromMe}>
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

    .hide {
        display: none;
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
 