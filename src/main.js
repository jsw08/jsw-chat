import './app.css'
import "@fontsource/roboto"
//@ts-ignore
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
