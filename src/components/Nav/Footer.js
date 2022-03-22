
import '../styles/global.css'






const Footer=()=> {



    return (

        <>
            {/* eighth section for footer*/}
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
                                    <label for="floatingInput">Email</label>
                                    <button className="btn btn-primary mt-2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer">
                <div className="container">
                    <a style={{ color: '#888', borderRight: '1px dotted #f1f1f1' }}>Copyright 2022 , All Rights Deserve </a>
                    <a style={{ color: '#888', marginLeft: '5px' }}>Privacy&Policy</a>
                </div>
            </div>
        </>
    )
}
export default Footer;
