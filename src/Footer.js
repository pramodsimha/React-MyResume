import React from 'react'

const Footer=()=>{
    return(
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            #452 "SLN Nilayaya"
                            <br />
                            Tumkur-572102
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/pramodbksimha/"><i className="fab fa-fw fa-facebook-f">insta</i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/pramod-simha-b-k-509774212/"><i className="fab fa-fw fa-twitter">li</i></a>
                        
                    </div>
                    
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;