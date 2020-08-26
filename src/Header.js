import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTvOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <div className="header_icons">
                <div className="header_icon header_icon_active">
                <HomeIcon/>
                <p>Home</p>
                </div>
                <div className="header_icon">
                <FlashOnIcon/>
                <p>Trending</p>
                </div>
                <div className="header_icon">
                <LiveTvIcon/>
                <p>Verified</p>
                </div>
                <div className="header_icon">
                <VideoLibraryIcon/>
                <p>Collection</p>
                </div>
                <div className="header_icon">
                <SearchIcon/>
                <p>Search</p>
                </div>
                <div className="header_icon">
                <PersonIcon/>
                <p>Account</p>
                </div>
                </div>
                <img
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt="" 
                />
            </div>
    )
}

export default Header;