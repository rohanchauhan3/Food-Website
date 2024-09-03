import React from 'react'
import './PrivacyPolicy.css'
import { assets } from '../../assets/assets'
import privacy_p from '../../assets/privacy_p.png'

const PrivacyPolicy = () => {
  return (
    <div className='policy' >
        
        <div className='privacypolicy'>
        <img className='pp' src={privacy_p} alt="" />
            <h1 className='privacy'>Privacy Policy</h1>            
        </div>
        <hr />
        <div className='details'>
        <h3>Last updated on April 22, 2024.</h3>
        <p>Cyber Limited (Formerly known as Cybercrave Private Limited and Cybercrave Media Private Limited) and/or its affiliates ("Cybercrave," the "Company," "we," "us," and "our,") respect your privacy and is committed to protecting it through its compliance with its privacy policies. This policy describes</p>

        <li>The types of information that Cybercrave may collect from you when you access or use its websites, applications and other online services.</li>
       
        <li>(collectively, referred as "Services"); and its practices for collecting, using, maintaining, protecting and disclosing that information.</li>
        <p className='pd'>This policy applies only to the information Cybercrave collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.
            This policy DOES NOT apply to information that you provide to, or that is collected by, any third-party, such as restaurants at which you make reservations and/or pay through Cybercrave's Services and social networks that you use in connection with its Services. Cybercrave encourages you to consult directly with such third-parties about their privacy practices.
            This policy applies only to the information Cybercrave collects through its Services, in email, text and sent through or in connection with its Services.
            Please read this policy carefully to understand Cybercrave's policies and practices regarding your information and how Cybercrave will treat it. By accessing or using its Services and/or registering for an account with Cybercrave, you agree to this privacy policy and you are consenting to Cybercrave's collection, use, disclosure, retention, and protection of your personal information as described here. If you do not provide the information Cybercrave requires, Cybercrave may not be able to provide all of its Services to you.</p>
            
        </div>
    </div>
  )
}

export default PrivacyPolicy
