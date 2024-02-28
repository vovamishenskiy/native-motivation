import App from './App.jsx'
import ChangeDevice from './changeDevice.jsx'

const screenWidth = window.innerWidth

const RootComponent = () => {
    screenWidth >= 1024 ? <ChangeDevice /> : <App />
}

export default RootComponent