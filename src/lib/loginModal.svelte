<script>
    //@ts-ignore
    import {Container,Row, Col,Button, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'sveltestrap'
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
    <ModalBody><Input bind:value={value} placeholder="Username" on:change={login} max-length="10"/></ModalBody>
    <ModalFooter>
        <Container>
            <Row>
                <Col><Button class="col" block color="danger" on:click={() => {window.close()}}>CANCEL</Button></Col>
                <Col><Button class="col" block color="primary" on:click={login}>LOGIN</Button></Col>
            </Row>
        </Container>
    </ModalFooter>
</Modal>