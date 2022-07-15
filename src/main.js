import './app.css'
import './bootstrap-nightshade.min.css';
import "@fontsource/roboto"
//@ts-ignore
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
