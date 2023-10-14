import React from 'react';
import './Footer.css';
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from "react-icons/bi";
import {IconContext} from "react-icons";

const Footer = (props) => {
    return (
        <div className="Footer h-40 flex justify-center bg-skin-base-3 bg-opacity-20 footer-border">
            <div className="w-[80%] p-4 flex flex-col items-center gap-4">
                <div>Copyright &#169; 2023 Dynamo</div>
                <div className="w-full flex justify-center p-4 add-top gap-5">
                    <IconContext.Provider value={{size: '30'}}>
                        <a href="#"><BiLogoFacebook/></a>
                        <a href="#"><BiLogoLinkedin/></a>
                        <a href="#"><BiLogoInstagram/></a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default Footer;