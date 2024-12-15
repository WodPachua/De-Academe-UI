import logo from '/images/logo.png'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
      <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
        <Outlet />
      </div>
    </>
  )
}

export default App
