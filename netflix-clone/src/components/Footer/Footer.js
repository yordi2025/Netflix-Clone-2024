import React from 'react';
import './Footer.css';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons' role="group" aria-label="Social Media Links">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className='footer_data'>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer_copy">
          <p>&copy; {new Date().getFullYear()} Netflix Clone | Built for learning purposes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
