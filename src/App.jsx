import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  )
}

export default App
