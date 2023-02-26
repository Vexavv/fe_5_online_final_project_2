import React from "react";
import { FaFacebookF,FaTwitter,FaInstagram,FaPinterest,FaYoutube,FaHeadphonesAlt,FaInbox,FaMapMarkerAlt } from "react-icons/fa";
import './Footer.scss'; 

function Footer(props) {
    return (
        <div className="box">
            <div className="container">
            <div className="row">
                <div className="column">
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/files/footer_logo_180x.png?v=1629543119" alt="" srcset="" />
                    </a>                    
                    <br />
                    <div className="social-icons">
                    <a href="/"><FaFacebookF/></a>                 
                    <a href="/"><FaTwitter/></a>                 
                    <a href="/"><FaInstagram/></a>                 
                    <a href="/"><FaPinterest/></a>                 
                    <a href="/"><FaYoutube/></a>                 
                    </div>
                </div>
                <div className="column">
                <h2 className="head">Information Company</h2>
                <a href="/account">My Account</a>
                <a href="/order">Track Your Order</a>
                <a href="/faqs">FAQs</a>
                <a href="/payments">Payment Methods</a>
                <a href="/shipping">Shipping Guide</a>
                <a href="/support">Products Support</a>
                <a href="/gift">Gift Card Balance</a>
                </div>
                <div className="column">
                <h2 className="head">More From Rubix</h2>
                <a href="/rubix">About Rubix</a>
                <a href="/guarantees">Our Guarantees</a>
                <a href="/terms">Terms and Conditions</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/return">Return Policy</a>
                <a href="/delivery">Delivery & Return</a>
                <a href="/sitemap"> Sitemap</a>
                </div>
                <div className="column">
                <h2 className="head">Let's Talk</h2>
                <p><FaHeadphonesAlt/> +391 (0)35 2568 4593</p>
                <u><FaInbox/> hello@domain.com</u>
                <h2 className="head">Find Us</h2>
                <p>502 New Design Str <br /><FaMapMarkerAlt/> Melbourne, Australia</p>
                </div>
            </div>
            </div>
      </div>
    );
}

export default Footer;