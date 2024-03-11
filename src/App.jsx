import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Category from './pages/category/Category'
import Cart from './pages/cart/Cart'
import Like from './pages/like/Like'

function App() {

  // fetch('http://localhost:3000/banner').then(res => res.json()).then(data => console.log(data))

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:name' element={<Category/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/liked' element={<Like/>} />
      </Routes>
    </>
  )
}

export default App
