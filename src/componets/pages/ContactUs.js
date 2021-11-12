import React from 'react';
import '../data/main.scss';
import emailjs from 'emailjs-com';

function ContactUs(){

    function sendEmail(e){
        alert('Message sent');
        emailjs.sendForm('','',e.target,''
        ).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }

	return (
        <div>
            <div id="contactUs">
                <h1 >Contact Us</h1>
                <p className="sub-title">Kuma Lake Dam</p>

                <div id="contact-container">
                    <div className="contact-info">
                        <h4>Contact Information</h4>
                        <div className="info"><p>Fill out the form and submit information, and we will get back to you shortly!</p></div>                      
                    </div>
                    <form onSubmit={sendEmail}>     
                        <div className="col">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstname" maxLength='20'/>
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" name="lastname"  maxLength='20'/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="email" name="user_email" maxLength='50'/>
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phonenumber"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Summary</label>
                                <textarea name="summarys" rows="4" maxLength='200'></textarea>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group right">
                                <button className="primary" type="submit" value="Send">Send Form</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

	);
}

export default ContactUs