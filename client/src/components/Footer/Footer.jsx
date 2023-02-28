import React, {useState, useEffect} from "react";
import { FaFacebookF,FaTwitter,FaInstagram,FaPinterest,FaYoutube,FaHeadphonesAlt,FaInbox,FaMapMarkerAlt } from "react-icons/fa";
import styles from './Footer.module.scss'

function Footer(props) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth < 990) {
        setIsOpen2(false);
        setIsOpen1(false);
      } else {
        setIsOpen2(true);
        setIsOpen1(true);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const toggleMenu1 = () => {
      setIsOpen1(!isOpen1);
    };

    const toggleMenu2 = () => {
        setIsOpen2(!isOpen2);
      };

    return (
        <div className={styles.box}>
            <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/files/footer_logo_180x.png?v=1629543119" alt="" srcset="" />
                    </a>                    
                    <br />
                    <div className={styles.social}>
                    <a href="/"><FaFacebookF/></a>                 
                    <a href="/"><FaTwitter/></a>                 
                    <a href="/"><FaInstagram/></a>                 
                    <a href="/"><FaPinterest/></a>                 
                    <a href="/"><FaYoutube/></a>                 
                    </div>
                </div>
                <div className={styles.column}>
                <h2 className={styles.head}>Information Company
                <button className={styles.burger} onClick={toggleMenu1}>&#8595;</button>
                </h2>
                    { isOpen1 && (<div className={styles.wrapper}>
                        <a href="/account">My Account</a>
                        <a href="/order">Track Your Order</a>
                        <a href="/faqs">FAQs</a>
                        <a href="/payments">Payment Methods</a>
                        <a href="/shipping">Shipping Guide</a>
                        <a href="/support">Products Support</a>
                        <a href="/gift">Gift Card Balance</a>
                    </div>)}
                </div>
                <div className={styles.column}>
                <h2 className={styles.head}>More From Rubix
                <button className={styles.burger} onClick={toggleMenu2}>&#8595;</button>
                </h2>
                    {isOpen2 && (<div className={styles.wrapper}>
                        <a href="/rubix">About Rubix</a>
                        <a href="/guarantees">Our Guarantees</a>
                        <a href="/terms">Terms and Conditions</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/return">Return Policy</a>
                        <a href="/delivery">Delivery & Return</a>
                        <a href="/sitemap"> Sitemap</a> 
                    </div>)}
                </div>
                <div className={styles.column}>
                <h2 className={styles.head}>Let's Talk</h2>
                <p><FaHeadphonesAlt/> +391 (0)35 2568 4593</p>
                <u><FaInbox/> hello@domain.com</u>
                <h2 className={styles.head}>Find Us</h2>
                <p>502 New Design Str <br /><FaMapMarkerAlt/> Melbourne, Australia</p>
                </div>
             </div>
            </div>
      </div>
    );
}

export default Footer;