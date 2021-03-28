import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar'
import CssBaseLine from '@material-ui/core/CssBaseline'

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLoggedIn = ()=> {
    setLoggedIn(!loggedIn)
  }

useEffect(()=>{
  if(localStorage.getItem('token')){
    handleLoggedIn()
  }
},[])

  return (
    <div className = "App">
          <CssBaseLine/>
            <NavBar loggedIn = {loggedIn} handleLoggedIn = {handleLoggedIn}/>
    </div>
  )
}
export default App