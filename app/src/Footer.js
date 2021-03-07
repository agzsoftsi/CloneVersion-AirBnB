import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="info_footer">
                <div className="about">
                    
                    <ul>
                    <li><h5>ABOUT</h5></li>
                    <li>How Airbnb works</li>
                    <li>Newsroom</li>
                    <li>Investors</li>
                    <li>Airbnb Plus</li>
                    </ul>
                </div>
                <div className="about">
                   
                    <ul>
                    <li><h5>COMMUNITY</h5></li>
                    <li>Diversity & Belonging</li>
                    <li>Against Discrimination</li>
                    <li>Accessibility</li>
                    <li>Airbnb Associates</li>
                    </ul>
                </div>
                <div className="about">
                    
                    <ul>
                        <li><h5>HOST</h5></li>
                    <li>Host your home</li>
                    <li>Host an Online Experience</li>
                    <li>Host an Experience</li>
                    <li>Community Center</li>
                    </ul>
                </div>
                <div className="about">
                    
                    <ul>
                    <li><h5>SUPPORT</h5></li>
                    <li>Help Center</li>
                    <li>Cancellation options</li>
                    <li>Neighborhood Support</li>
                    <li>Trust & Safety</li>
                    </ul>
                </div>
            </div>
            <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer