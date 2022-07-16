<script>
    export let i
    import {Alert} from 'sveltestrap'
</script>

<div style:float={i.fromMe ? "right":"left"} >
    <Alert style="word-wrap: break-word; margin: 10px; margin-bottom:0; width: max-content; max-width: 40vw;" class={i.fromMe ? "right":"left"} color={i.fromMe ? "primary":"secondary"}>{i.message}<br><i style:font-size="0.7em">{i.time}, <b>{i.username}</b></i></Alert>
</div>