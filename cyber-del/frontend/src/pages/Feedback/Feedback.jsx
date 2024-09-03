import React from 'react'
import './Feedback.css'
import msg_icon from '../../assets/msg-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Feedback = () => {

    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2d6db635-b05d-4f76-99c1-5be5545c3f2b");
  
      const response = await fetch("https://api.web3forms.com/submit", { 
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
    <div className="contact-col">
      <h1>Feedback Us</h1>
      <h3>Send us message <img src={msg_icon} alt="" /></h3>
    <p>Feel free to reach out through Feedback form. Your feedback, questions, and suggestions are 
      important to us.</p>
    </div>
    <div className="contact-col">
      <form onSubmit={onSubmit}>
        <label>Your name</label>
        <input type="text" name='name' placeholder='Enter your name'required/>
        <label>Write your messages here</label>
        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn'>Submit now <img src={white_arrow} alt="" /></button>
      </form>
      <span>{result}</span>
    </div>
  </div>
  )
}

export default Feedback
