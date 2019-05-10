import React from 'react';
import logo1 from "../../assets/images/logo-wcs-green.png";
import './index.css';
import { NavLink } from 'react-router-dom';




const Portal = (props) => (
	<div className="portal-parent">
		<div className="logo-portal">
			<NavLink to = "/home">
				<img className="logo-wcs-portal" src={logo1} alt="logo1"/>
			</NavLink>
		</div>
	</div>

)

export default Portal;