import React from 'react';
import { Link } from 'react-router-dom';
import {Button2} from './Button';
import './Footer.css';

function Footer(){
    return(
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Kuma Lake Dam newsletter to receive news about our dam and recreation!
                </p>
                <p className="footer-subscription text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button2 buttonStyle='btn--outline' to='/'>Subscribe</Button2>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> About Us</h2>
                        <Link to='/'>Kuma Lake</Link>
                        <Link to='/'>Lumi River</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/contactus'>Contact</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                        NaturalPower&nbsp; <i className='fas fa-power-off'/>  
                        </Link>
                    </div>
                    <small className="website-rights">NaturalPower © 2021</small>
                   
                </div>
            </section>
        </div>
    );
}

export default Footer

