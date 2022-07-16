<script>
    import {messages} from '../stores.js'
    import Bubble from './bubble.svelte'
    import Input from './input.svelte'
    
    let msgs;

    messages.subscribe(v => {msgs = v})
</script>
<div style:display="grid" style="width: 100vw; max-height: calc(100vh - 53.8333px); position: absolute; top:0; overflow:scroll;">
    {#each msgs as i}
    <div>
        <Bubble {i}/>
    </div>
    {/each}
</div>
<Input/>
