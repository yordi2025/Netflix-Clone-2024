import React from 'react'
import "./Header.css"
import logo from '../../assets/images/netflix-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className="HeaderOuterContainer">
      <div className="HeaderContainer">
        <div className="HeaderLeft">
          <ul>
            <li><img src={logo} alt="netflix-logo" /></li>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browser By Language</li>
          </ul>
        </div>
         
         <div className='HeaderRight'>
          <ul>
      
            <li><SearchIcon /></li>
            <li><NotificationsIcon  /></li>
            <li><AccountBoxIcon  /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
         </div>
         
      </div>
    </div>
  );
}

export default Header