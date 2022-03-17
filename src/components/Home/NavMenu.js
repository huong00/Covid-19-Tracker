
import { Link } from "react-router-dom";


const Navmenu = () => {
    return (
                <>
                    <nav className="navbar p-3">
                        <div className="container">
                            <div className="left-content">
                                <Link to="/"><a className='link'>Home</a></Link>
                                <Link to="/"><a className='link'>Posts</a></Link>
                                <Link to="/"><a className='link'>Chatgories</a></Link>
                                <Link to="/"><a className='link'>About</a></Link>
                                <Link to="/"><a className='link'>Contact Us</a></Link>
                                <Link to="/"><a className='link'>Pages</a></Link>
                            </div>

                            <div className="right-content">
                                <div className="date">
                                    <select>
                                        <option>English</option>
                                        <option>Viet Nam</option>
                                    </select>
                                    <Link href="#"><a className='link m-3'><i class="fa fa-search"></i></a></Link>
                                </div>
                                <div className="social">
                                    <Link href="#"><a className="dash">Dashboard</a></Link>
                                </div>
                            </div>

                        </div>

                    </nav>
                </>
    )
}
export default Navmenu;
