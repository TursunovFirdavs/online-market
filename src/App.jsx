import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Card from './pages/cart/Cart'
import Category from './pages/category/Category'

function App() {

  // fetch('http://localhost:3000/banner').then(res => res.json()).then(data => console.log(data))

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:name' element={<Category/>} />
        <Route path='/cart' element={<Card/>} />
        <Route path='/liked' />
      </Routes>
    </>
  )
}

export default App
