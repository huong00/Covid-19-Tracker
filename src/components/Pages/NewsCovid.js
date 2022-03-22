import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/newscovid.css'
import { RingLoader } from 'react-spinners';

function NewsCovid() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const getNews = async () => {
        const newsData = await axios.get('https://gw.vnexpress.net/ar/get_rule_2?category_id=1004692&limit=16&page=1&data_select=article_id,article_type,title,share_url,thumbnail_url,publish_time,lead,privacy,original_cate,article_category&thumb_size=300x180&thumb_quality=100&thumb_dpr=1,2,3,4&thumb_fit=crop')
        setNews(newsData.data.data['1004692'].data)
        setLoading(false)
    }
    useEffect(() => { getNews() }, [])
    console.log(news);
    

    const renderNews = () => {
        return loading ? <div className='loading'><RingLoader color='#D78536' loading={loading} size={60} /></div>:news.map((n) => (
                <a href={n.share_url} target='_blank' className="card-covid">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={n.thumbnail_url} className="img-fluid rounded-start" alt="API error" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{n.title}</h5>
                                <p className="card-text">{n.lead}</p>
                                <p className="card-text"><small className="text-muted">Last updated now</small></p>
                            </div>
                        </div>
                    </div>
                </a>
        ))
    }
    return (
        <div className='container min-height'>
            <div className='row'>
                {renderNews()}
            </div>
        </div>
    );

}

export default NewsCovid;