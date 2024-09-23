import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Dashboard1 from './Components/Dashboard1'
import Dashboard1b from './Components/Dashboard1b'
import Dashboard2 from './Components/Dashboard2'
import Dashboard3 from './Components/Dashboard3'
import Dashboard4 from './Components/Dashboard4'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='min-h-screen bg-white px-8 md:px-14 lg:px-36 pb-10 pt-7'>
          <Header/>
          <br/><br/><br/>
          <Dashboard1/>
          <br/><br/><br/>
          <Dashboard1b/>
          <br/><br/><br/>
          <Dashboard2/>
          <br/><br/><br/>
          <Dashboard3/>
          <br/><br/><br/>
          <Dashboard4/>
          <br/><br/><br/>
          <Footer/>
      </div>    
  )
}
export default App

