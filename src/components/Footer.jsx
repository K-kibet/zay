
import { EmailOutlined, LocationOnOutlined, Phone } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='section-wrapper theme'>
               <div class="meta">
                    <h2 >Zay Shop</h2>
                    <ul >
                        <li>
                            <LocationOnOutlined />
                            <span>123 Consectetur at ligula 10660</span>
                            
                        </li>
                        <li>
                            <a href="tel:010-020-0340"><Phone /> 010-020-0340</a>
                        </li>
                        <li>
                            <a href="mailto:info@company.com"><EmailOutlined /> info@company.com</a>
                        </li>
                    </ul>
                </div>
                <section>
                    <h2>Featured</h2>
                    <div className='items-container'>
                        <a href='#' title='store'>Gym Accessories</a>
                        <a href='#'>Luxury</a>
                        <a>Sport Wear</a>
                        <a>Women's Shoes</a>
                    </div>
                </section>

                <section>
                    <h2>Zay</h2>
                    <div className='items-container'>
                        <a href='/'>Home</a>
                        <a href='/about'>About Us</a>
                        <a href='/shop'>Shop</a>
                        <a href='/contact'>Contact Us</a>
                    </div>
                </section>
            </div>

            <hr />

            <div className='footer-bottom'>
                <p>&copy; Zay 2022</p>
                <a>Privacy & cookies</a>
                <a>FAQ</a>
                <a>Help</a>
            </div>
        </div>
    );
}

export default Footer;