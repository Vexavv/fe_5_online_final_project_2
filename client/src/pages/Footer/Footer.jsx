import React from "react";
import './Footer.scss'; 

function Footer(props) {
    return (
        <div className="box">
            <div className="container">
            <div className="row">
                <div className="column">                    
                    <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/files/footer_logo_180x.png?v=1629543119" alt="" srcset="" />
                </div>
                <div className="column">
                <p className="head">Information Company</p>
                <a href="/account">My Account</a>
                <a href="/order">Track Your Order</a>
                <a href="/faqs">FAQs</a>
                <a href="/payments">Payment Methods</a>
                <a href="/shipping">Shipping Guide</a>
                <a href="/support">Products Support</a>
                <a href="/gift">Gift Card Balance</a>
                </div>
                <div className="column">
                <p className="head">More From Rubix</p>
                <a href="/rubix">About Rubix</a>
                <a href="/guarantees">Our Guarantees</a>
                <a href="/terms">Terms and Conditions</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/return">Return Policy</a>
                <a href="/delivery">Delivery & Return</a>
                <a href="/sitemap"> Sitemap</a>
                </div>
                <div className="column">
                <p className="head">Let's Talk</p>
                <p>+391 (0)35 2568 4593</p>
                <u>hello@domain.com</u>
                <p className="head">Find Us</p>
                <p>502 New Design Str <br />Melbourne, Australia</p>
                </div>
                {/* <div className="column">
                <a href="#">
                    <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                        Facebook
                    </span>
                    </i>
                </a>
                <a href="#">
                    <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>
                        Instagram
                    </span>
                    </i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>
                        Twitter
                    </span>
                    </i>
                </a>
                <a href="#">
                    <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>
                        Youtube
                    </span>
                    </i>
                </a>
                </div> */}
            </div>
            </div>
      </div>
    );
}

export default Footer;