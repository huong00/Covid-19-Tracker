import React from 'react';
import '../styles/contact.css';

function Contact(props) {
    return (
        <div className='container min-height'>
            <div className="innerwrap">
                <section className="section1 clearfix">
                    <div className="textcenter">
                        <h2 className="shtext">Contact Us</h2>
                        <span className="seperator"></span>
                    </div>
                </section>
            
                <section className="row section2 clearfix">
                    <div className="col-md-6 col-sm-12">
                        <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.942942751968!2d105.76346311476338!3d21.034968885995017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b93c73ca9d%3A0x210784911132ebe!2zMjQgUGjhu5EgTmd1eeG7hW4gQ8ahIFRo4bqhY2gsIE3hu7kgxJDDrG5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1648008531180!5m2!1svi!2s"
                         style={{border: 0}} allowFullScreen loading="lazy">
                        </iframe>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="sec2innercont">
                            <div className="sec2addr">
                                <p>24 Nguyễn Cơ Thạch, Từ Liêm, Hà Nội</p>
                                <p><span className="collig">Điện thoại :</span> +84 97564 0181</p>
                                <p><span className="collig">Email :</span> hvhuong2000@gmail.com</p>
                            </div>
                        </div>
                        <div className="sec2contactform">
                            <h3 className="sec2frmtitle">Liên hệ với chúng tôi!</h3>
                            <form action="">
                                <div className="clearfix">
                                    <input className="col2 first" type="text" placeholder="Họ"/>
                                    <input className="col2 last" type="text" placeholder="Tên"/>
                                </div>
                                <div className="clearfix">
                                    <input  className="col2 first" type="Email" placeholder="Email"/>
                                    <input className="col2 last" type="text" placeholder="Số điện thoại"/>
                                </div>
                                <div className="clearfix">
                                    <textarea name="textarea" id="" cols="30" rows="7" placeholder='Tin nhắn của bạn...'/>
                                </div>
                                <div className="clearfix"><input type="submit" value="Gửi"/></div>
                            </form>
                        </div>

                    </div>
                </section>
        
            </div>
        </div>
    );
}

export default Contact;