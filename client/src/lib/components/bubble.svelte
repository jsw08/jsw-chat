<script>
    export let i;
    import {encode} from 'html-entities'
    import {parse} from './../parse.js'

    i.msg = parse(encode(i.msg)).trim()
</script>
<div  id={i.id} class:float-left={!i.fromMe} class:white-text={i.fromMe} class:primary-color={i.fromMe} class:float-right={i.fromMe} class="elevation-7 rounded-lg">
    {@html i.msg}
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