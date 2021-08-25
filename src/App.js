import React from 'react'
import MasterSection from './MasterSection'
import NavBar from './Navbar'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './ContactMe'
import Footer from './Footer'
const App=()=>{
    return(
        <div>
            
            <NavBar/>
            <MasterSection/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;