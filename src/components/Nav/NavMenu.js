import '../styles/menu.css'
import { Link } from "react-router-dom";
import Weather from "./Weather";


const Navmenu = () => {
    return (
                <>
                        <div className="container">
                    <nav className="navbar p-3">
                            <div className="left-content">
                                <Link className="link menu-item" to="/">Trang chủ</Link>
                                <Link className="link menu-item" to="/newscovid">Tin tức y tế</Link>
                                <div className="dropdown menu-item" >
                                    <button className="dropbtn">Số liệu Covid 19<i className="fa fa-caret-down drop-icon"></i></button>

                                    <div className="dropdown-content drop-content">
                                        <Link className="link menu-dropdown-item" to="/covidvn">Covid 19 Việt Nam</Link>
                                        <Link className="link menu-dropdown-item" to="/covidword">Covid 19 Thế giới</Link>
                                    </div>
                                </div>
                                <Link className="link menu-item" to="/about">Giới thiệu</Link>
                                <Link className="link menu-item" to="/contact">Liên hệ</Link>
                            </div>

                            <div className="right-content">
                                <div className="search-select">
                                    <Link className="link" to="#"><i className="fa fa-search"></i></Link>
                                    <select>
                                        <option>Vie</option>
                                        <option>Eng</option>
                                    </select>
                                </div>
                                <div className="weather-home">
                                    <Weather />
                                </div>
                            </div>

                    </nav>
                        </div>

                </>
    )
}
export default Navmenu;
