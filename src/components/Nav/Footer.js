
import '../styles/global.css'






const Footer=()=> {



    return (

        <>
            <footer className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h1><i className="fa fa-newspaper-o"></i>News<span style={{ color: 'blue' }}>PARK</span></h1>
                            <i className="fa fa-twitter link"></i>
                            <i className="fa fa-facebook link"></i>
                            <i className="fa fa-instagram link"></i>
                            <i className="fa fa-youtube link"></i>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h6>Subscribe to our Newletter</h6>
                            <form>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Headline..."
                                    />
                                    <label htmlFor="floatingInput">Email</label>
                                    <button className="btn btn-primary mt-2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer">
                <div className="container">
                    <a style={{ color: '#888'}}>Copyright 2022 , All Rights Deserve </a><br></br>
                    <a style={{ color: '#888', marginLeft: '5px' }}>Privacy&Policy</a>
                </div>
            </div>
        </>
    )
}
export default Footer;
