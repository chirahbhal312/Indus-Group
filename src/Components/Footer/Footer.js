import React from 'react';
import './Footer.css';
import facebookIcon from './facebook 2.jpg';
import youtubeIcon from './youtube.jpg';
import instagramIcon from './instagram.jpg';
import twitterIcon from './twitter.jpg';
import linkedinIcon from './linkedin.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h2>The Indus Group of Companies</h2>
                <p>High level experience in web design and development knowledge, producing quality work.</p>
            </div>
            <div className="footer-section">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>PRODUCT</h3>
                <ul>
                    <li><a href="#">Indus B2B Solutions</a></li>
                    <li><a href="#">Myskills Academy</a></li>
                    <li><a href="#">Indus Enterprises</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>FOLLOW US</h3>
                <ul className="social-media">
                <li><a href="#"><img src={facebookIcon} alt="Facebook" /></a></li>
                    <li><a href="#"><img src={youtubeIcon} alt="YouTube" /></a></li>
                    <li><a href="#"><img src={instagramIcon} alt="Instagram" /></a></li>
                    <li><a href="#"><img src={twitterIcon} alt="Twitter" /></a></li>
                    <li><a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
                </ul>
                <p><a href="mailto:contact@indus.com">contact@indus.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;
