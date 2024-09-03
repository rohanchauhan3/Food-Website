import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { MediaData } from '../../data/MediaData'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <React.Fragment>
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo} alt="" />
            <p>Offers delicious and healthy meals. It provides a wide variety of dishes, from traditional Indian cuisine to modern fusion dishes. All meals are prepared with fresh ingredients and are cooked to perfection.The delivery service is fast and efficient, and the customer service is friendly and helpful. Canteen Central by EatFit is the perfect choice for those looking for a delicious and healthy meal.</p>
            <div className="footer-social-icons">
                {
                  MediaData.map((item, index) => {
                    return(
                      <div key={index}>
                        <a href={item.href}>
                          <img src={item.img} alt="media" />
                        </a>
                      </div>
                    )
                  })
                }
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li onClick={()=>navigate('/')} >Home</li>
                <li onClick={()=>navigate('/feedback')}>Feedback</li>
                <li onClick={()=>navigate('/privacypolicy')}>Privacy policy</li>
                
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9510212518</li>
                <li onClick={()=>navigate('/contact')} >contact@cyber.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Cyber.com - All Right Reserved.</p>
    </div>
    </React.Fragment>
  )
}

export default Footer
