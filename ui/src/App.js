import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Home from './screens/Home'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Roboto Mono', monospace`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 900,
    },
  },
})
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path='/' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
