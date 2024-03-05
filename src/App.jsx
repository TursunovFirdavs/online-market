import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Card from './pages/cart/Card'

function App() {

  fetch('http://localhost:3000/banner').then(res => res.json()).then(data => console.log(data))

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Card/>} />
      </Routes>
    </>
  )
}

export default App
