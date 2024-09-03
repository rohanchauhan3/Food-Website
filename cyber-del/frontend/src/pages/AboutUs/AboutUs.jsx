import React from 'react'
import './AboutUs.css'
import visit_us from '../../assets/visit_us.png'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <div className='aboutus'>
       <div className='ab'>
            <h1>About Us</h1>
             <img className='au' src={visit_us} alt="" />
           
            </div>
            <div className='about-us'>
           
            <h3>Welcome to Cybercrave Kitchen</h3>
            <hr />
            <p className='pa'>At Cybercrave Kitchen, we are passionate about bringing delicious meals right to your doorstep. Our journey began with a simple idea: to make ordering food convenient, enjoyable, and accessible to everyone.
            Founded in 2024, our team consists of food enthusiasts, tech experts, and customer service professionals who share a common goal: to revolutionize the way you experience food delivery.
             Whether you're craving a comforting bowl of pasta, a sizzling burger, or a fresh salad, we're here to satisfy your appetite with a wide selection of food.</p>
             


        </div>
    </div>
  )
}

export default AboutUs
