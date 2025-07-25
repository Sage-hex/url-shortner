import React from 'react'
import { Outlet} from 'react-router-dom'
import NavBar from './Components/Navbar'

const App = () => {
  return (
   <>
   <NavBar/>
   <Outlet />
   </>
  )
}

export default App
