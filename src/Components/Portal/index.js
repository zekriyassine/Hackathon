import React from 'react';
import logo1 from "../../assets/images/logo-wcs-green.png";
import './index.css';
import { NavLink } from 'react-router-dom';




const Portal = (props) => (
	<div className="portal-parent">
		<div className="logo-portal">
			<NavLink to = "/home">
				<img className="logo" src={logo1} alt="logo1"/>
			</NavLink>
		</div>
		<p className="bxl-txt">/bxl201903</p>
	</div>

)

export default Portal;