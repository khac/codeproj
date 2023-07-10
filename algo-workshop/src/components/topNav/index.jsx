import React from 'react';
import './styles.css';
import Logo from '../../../public/logo_name.svg';
import GithubLogo from '../../../public/github-mark-white.svg';
import YoutubeLogo from '../../../public/youtube-logo.png';

const topNav = ({setShowAbout}) => {
    return (
        <header className="topNav">
            <div className="row">
                <a className="text" href=".">
                    <img src={Logo} className="algorithms-workshop-logo" alt="logo" />
                </a>
                <div className="home-about">
                    <a href="#" onClick={() => {setShowAbout(false)}}>
                        <div className="lcell">
                            Home
                        </div>
                    </a>
                    <a href="#" onClick={() => {setShowAbout(true)}}>
                        <div className="rcell">
                            About
                        </div>
                    </a>
                </div>
                <div className="more-info">
                    <div className="lcell">
                        <a href="."     target="_blank"     rel="noopener noreferrer"> 
                            <img src={YoutubeLogo} className="github-logo" alt="github logo" />
                        </a>
                    </div>
                    <div className="rcell">
                        <a href="."       target="_blank"   rel="noopener noreferrer"> 
                            <img src={GithubLogo} className="github-logo" alt="github logo" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default topNav;