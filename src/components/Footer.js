import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <a href='https://www.facebook.com/profile.php?id=100011423861936'><FacebookIcon /> </a>
            <a href='https://www.linkedin.com/in/aosaf-himu/'><LinkedInIcon /></a>
            <InstagramIcon />
            <TwitterIcon />
        </div>
        <p> &copy; 2024 aosafhimu.com</p>
    </div>
  );
}

export default Footer;