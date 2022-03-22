import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/newshome.css'
import { RingLoader } from 'react-spinners';

function NewsHome() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const getNews = async () => {
        const newsData = await axios.get('https://gw.vnexpress.net/bt?site_id=1000000&category_id=1000000&showed_area=pageview:30&limit=30&data_select=article_id,article_type,title,share_url,thumbnail_url,publish_time,lead,privacy,original_cate,article_category')
        setNews(newsData.data.data.pageview.data)
        setLoading(false)
    }
    useEffect(() => { getNews() }, [])  
    

    const renderNews = () => {
        return loading ? <div className='loading'><RingLoader color='#D78536' loading={loading} size={60} /></div>:news.map((n) => (
                <a href={n.share_url} target='_blank' className='card'>
                    <div className="">
                        <img src={n.thumbnail_url} className="card-img-top" alt="API error"/>
                        <div className="card-body">
                            <h5 className="card-title">{n.title}</h5>
                            <p className="card-text">{n.lead}</p>
                            <p className="card-text"><small className="text-muted">Last updated now</small></p>
                        </div>
                    </div>
                </a>
        ))
    }
    return (
        <div className='container'>
            <div className='row'>
                {renderNews()}
            </div>
        </div>
    );

}

export default NewsHome;