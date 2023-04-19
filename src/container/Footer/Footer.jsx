import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Survey No 25, 2nd Floor, Kojagiri Building, Satara Rd, opp. Canera
          Bank, Shridharnagar, Vivek Nagar, Chaitanya Nagar, Pune, Maharashtra
          411043
        </p>
        <br></br>
        <p className="p__opensans">+91 88882 37925</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Your gaming adventure starts here.&quot;
        </p>

        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/ggwellplayedgamingcafe">
            <FiFacebook />
          </a>
          <FiTwitter />
          <a href="https://www.instagram.com/ggwellplayedcafe/following/">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 GGWELLPLAYED. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
