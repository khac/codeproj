import React from 'react';
import './styles.css';

const FooterSection = ({setShowAbout}) => {
    return (
        <div className='footerSection'>
            <ul>
                <li>
                    <a href='#' onClick={() => {setShowAbout(true)}}>About</a>
                </li>
                <li>
                    <a href="mailto:aditxy@hotmail.com?subject=Note from AlgoWorkshop visitor&body=Hi Adit! " target="_blank">Get in Touch</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href='http://www.linkedin.com/in/adit'>Linkedin</a>
                </li>
            </ul>
        </div>
    )
};

export default FooterSection;