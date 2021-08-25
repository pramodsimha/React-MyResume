import React from 'react'


const About=()=>{
    return(
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                <h1 style={{fontStyle:"italic",color:'#ebbd34'}}>Pramod Simha B K</h1>
                <p className="lead" style={{color:"#3c3652"}}>
                        A guy who is seeking opportunities to tackle challenges and develop solutions by utilizing his skills and
knowledge in various areas, also to apply the same while working towards achieving the company's collective goal.</p>
                    <div className="col-lg-4 ms-auto">
                        
                    
                    </div>
               
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="www.linkedin.com">
                        <i className="fas fa-download me-2"></i>
                        Let's meet on LinkedIn
                    </a>
                </div>
            </div>
            </div>
        </section>
    )
}
export default About;