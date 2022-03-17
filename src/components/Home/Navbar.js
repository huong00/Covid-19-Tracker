
import NavMenu from './NavMenu';

const Navbar = () => {

   
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="left-content">
                        <div className="tag"><b>Trending</b></div>
                        <div className="headline">

                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <p className="para">Lorem Ipsum is simply dummy text of the printing.</p>
                                    </div>
                                    <div class="carousel-item">
                                        <p className="para">Lorem Ipsum is simply dummy text of the </p>
                                    </div>
                                    <div class="carousel-item">
                                        <p className="para">Lorem Ipsum is simply dummy text of the printing and tyscript</p>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class=" arrow-left " aria-hidden="true">
                                        <i className="fa fa-arrow-left"></i>
                                    </span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="arrow-right " aria-hidden="true">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>

                                </button>
                            </div>


                        </div>

                    </div>

                    <div className="right-content">
                        <div className="date">jun,18 2021,Friday</div>
                        <div className="social">
                            <a href="#" className='link'><i className="fa fa-twitter"></i></a>
                            <a href="#" className='link'><i className="fa fa-facebook"></i></a>
                            <a href="#" className='link'><i className="fa fa-instagram"></i></a>
                            <a href="#" className='link'><i className="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="nav-two">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4 mb-2">
                            <h1><i className="fa fa-newspaper-o"></i>News<span style={{ color: 'blue' }}>PARK</span></h1>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className='div-content'>
                                Ads
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <NavMenu />



        </>
    )



}
export default Navbar;
