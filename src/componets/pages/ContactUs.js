import React from 'react';
import '../data/main.scss';
import styled, { css } from 'styled-components/macro';
import { EmailJSResponseStatus } from 'emailjs-com';
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
                        <p><div className="info">Fill out the form and submit information, and we will get back to you shortly!</div></p>
                        <div className="icon-info">
                        <i class="fa fa-phone fa-rotate-90" aria-hidden="true"></i>
                            <span></span>
                        </div>
                        <div className="icon-info">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                            <span></span>
                        </div>
                        <div className="icon-info">
                        <i class="fa fa-street-view" aria-hidden="true"></i>
                            <span></span>
                        </div>
                        <div className="social-media">
                           <a href="#" className="icon-circle">
                           <i class="fab fa-facebook"></i>
                               </a> 
                               <a href="#" className="icon-circle">
                               <i class="fab fa-twitter-square"></i>
                               </a> 
                               <a href="#" className="icon-circle">
                               <i class="fab fa-instagram"></i>
                               </a> 
                               <a href="#" className="icon-circle">
                               <i class="fab fa-youtube"></i>
                               </a> 
                        </div>
                    </div>
                    <form onSubmit={sendEmail}>     
                        <div className="col">
                        <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstname"/>
                        </div>
                        <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastname"/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" name="user_email"/>
                        </div>
                        <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phonenumber"/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-group">
                        <label css={`font-size:2rem`}> <div className="attachment">Please Upload Any Attachment you may have: </div></label>
                        <input type="file" name="attachment"/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-group solo">
                        <label><div className="summary" >Summary</div></label>
                        <textarea name="summarys"></textarea>
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