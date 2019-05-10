import React from 'react';
import './index.css';
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import wild from '../../assets/images/wild2.png';


const Footer = () => (
    <React.Fragment>

        <ul className="container-footer">
          
            <div className="container-icon"></div>
            <li className="item-footer">
                <a href="https://wildcodeschool.be/" target="blank"><img className="logo-wild" src={wild} alt="wild" /></a>
            </li>
            <li className="item-footer">
                <a href="https://www.facebook.com/wildcodeschoolbelgium/?__tn__=%2Cd%2CP-R&eid=ARC4N7vVYOeGHvr4vRdF3FTmYfwuFP1SL_dgUtMKSRbRtG-IYSGu4acuj5b6xhppHi8toaYoL7WP2dc-" target="blank"><img src={facebook} alt="facebook" /></a>
            </li>
            <li className="item-footer">
                <a href="https://www.instagram.com/wildcodeschoolbelgium/?hl=nl" target="blank"><img src={instagram} alt="instagram" /></a>
            </li>
            




        </ul>
    </React.Fragment>
)
export default Footer;