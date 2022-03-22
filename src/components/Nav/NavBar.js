import { useEffect, useState } from "react";
import "../styles/global.css";
import { Outlet } from "react-router";
import NavMenu from "./NavMenu";
import moment from "moment";
import "moment/locale/vi";
import axios from "axios";

moment.locale("vi");
function NavBar() {
    const [news, setNews] = useState([])
    const getNews = async () => {
        const newsData = await axios.get('https://gw.vnexpress.net/bt?site_id=1000000&category_id=1000000&showed_area=pageview:30&limit=5&data_select=article_id,article_type,title,share_url,thumbnail_url,publish_time,lead,privacy,original_cate,article_category')
        setNews(newsData.data.data.pageview.data)
    }
    useEffect(() => { getNews() }, [])  
    

    const renderTrend = () => {
        return (
                
            <div className="carousel-inner">
            <div className="carousel-item active">
              <a target="_blank" href={news[0]?.share_url || ""} className="para">{news[0]?.title || ""}</a>
            </div>
            <div className="carousel-item">
              <a target="_blank" href={news[1]?.share_url || ""} className="para">{news[1]?.title || ""}</a>
            </div>
            <div className="carousel-item">
              <a target="_blank" href={news[2]?.share_url || ""} className="para">{news[2]?.title || ""}</a>
            </div>
            <div className="carousel-item">
              <a target="_blank" href={news[3]?.share_url || ""} className="para">{news[3]?.title || ""}</a>
            </div>
            <div className="carousel-item">
              <a target="_blank" href={news[4]?.share_url || ""} className="para">{news[4]?.title || ""}</a>
            </div>
          </div>
        )
    }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="left-content">
            <div className="tag">
              <b>Tin nổi bật</b>
            </div>
            <div className="headline">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
                {renderTrend()}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                  <span className=" arrow-left " aria-hidden="true">
                    <i className="fa fa-arrow-left"></i>
                  </span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="arrow-right " aria-hidden="true">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="right-content">
            <div className="date">Ngày {moment().format("LL")}</div>
            <div className="social">
              <i className="fa fa-twitter link"></i>
              <i className="fa fa-facebook link"></i>
              <i className="fa fa-instagram link"></i>
              <i className="fa fa-youtube link"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-two">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 mb-2">
              <h1>
                <i className="fa fa-newspaper-o"></i>News
                <span style={{ color: "blue" }}>PARK</span>
              </h1>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="div-content">
                <img src="../ads.png" alt="ảnh lỗi" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavMenu />
      <Outlet />
    </>
  );
};
export default NavBar;
