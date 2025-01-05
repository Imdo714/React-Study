import React, {useState} from "react";
import youtube from '../img/youtube.png';
import menubar from '../img/menubar.png';
import bells from '../img/bells.png';
import profile from '../img/profile.png';

const Youtube = () => {
    return (
        <div>
            <header className="header">
                <div className="left-div">
                    {/* <img src={menubar} alt="menubar" style={{ height: '40px' }} />
                    <img src={youtube} alt="youtube" style={{ height: '80px', width: '80px' }} /> */}
                    <img src={menubar} alt="menubar" className="img" />
                    <img src={youtube} alt="menubar" className="img-youtube" />
                </div>

                <div className="search-div">
                    <input className="search" type="text" placeholder="검색" />
                    <button className="search-btn">검색</button>
                </div>

                <div className="left-div">
                    {/* <img src={bells} alt="bells" style={{ height:'50px' }} />
                    <img src={profile} alt="profile" style={{ height: '80px', width: '80px' }} /> */}
                    <img src={bells} alt="bells" className="img-bells" />
                    <img src={profile} alt="profile" className="img-profile" />
                </div>
                
            </header>
        </div>
    )
}

export default Youtube;