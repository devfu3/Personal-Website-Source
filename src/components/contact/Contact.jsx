import React, { useRef, useContext, useState } from 'react'
import "./contact.css"
import email from "../../img/email.png"
import phone from "../../img/phone.png"
import Address from "../../img/Address.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'



const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.
        sendForm(
            'service_f4ncajw', 
            'template_lob4ra4', 
            formRef.current, 
            'YYl3jUqCkItRoDrJ-'
        )
      .then(
        (result) => {
          console.log("email success", result.text);
          setDone(true)
      }, (error) => {
          console.log("email failure", error.text);
      });
    }
    
  return (
    <div className="c">
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c- title"> Reach out to me!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={email}
                            alt=""
                            className="c-icon"
                            />
                            devinfu@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={phone}
                            alt=""
                            className="c-icon"
                            />
                            (954)-632-6695
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={Address}
                            alt=""
                            className="c-icon"
                            />
                            3611 SW 34th St Apt 149, Gainesville, FL 32608
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                    <b>Want to get in touch with me?</b> Aside from my social media, you can contact me with this form!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Submitted, Thank you!"}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact