<script>
    import {Button, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'sveltestrap'
    import {loggedIn, username} from '../stores.js'

    let isOpen = false;
    let value;
    const login = () => {
        loggedIn.set(true); 
        username.set(value)
    }

    loggedIn.subscribe(v => {isOpen = !v})
</script>

<Modal {isOpen} >
    <ModalHeader>Login</ModalHeader>
    <ModalBody><Input {value} placeholder="Username" on:change={login}/></ModalBody>
    <ModalFooter>
        <Button style="display: inline; max-width: 48%;" block color="danger" on:click={() => {window.close()}}>CANCEL</Button>
        <Button style="display: inline; max-width: 48%;" block color="primary" on:click={login}>LOGIN</Button>
    </ModalFooter>
</Modal>