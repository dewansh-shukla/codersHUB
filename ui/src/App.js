import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
