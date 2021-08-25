import React from 'react'
import './styles.css'
import logo from './myphoto.jpeg'

const MasterSection=()=>{
    return(
       
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                
                
                
                <img src={logo} style={{height:"400px",width:"300px", borderRadius:"150px",marginBottom:"5"}}/>
                
                <h1 className="masthead-heading text-uppercase mb-0">PRAMOD SIMHA B K</h1>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <p className="masthead-subheading font-weight-light mb-0">Student - RVCE</p>
            </div>
        </header>
    )
}

export default MasterSection;