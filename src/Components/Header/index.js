import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from "../../assets/images/logo-wcs-green.png"
import "./index.css";
class Header extends React.Component {
  constructor(props){
    super(props)

    this.state={
      isActive: false,
    }

  }
  handleClick = ()=>{
    console.log('click', this.state.isActive)
    this.setState({isActive: !this.state.isActive})
  }


  render(){
    const classChange = this.state.isActive ? "active" : "";
    return(
  
      <div className={"container-header " + classChange }>
          <div className="container-logo">
            <p><img className="logo" src={logo1} alt="logo1"></img></p>
            <p className="wanted">anted</p>
          </div>
          <div className="div-burger" onClick={this.handleClick}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
          <ul className="navigation">
              <li><NavLink activeClassName="active" to="/home" >./home</NavLink></li>
              <li><NavLink activeClassName="active" to="">./student</NavLink></li>
              <li><NavLink activeClassName="active" to="/form">./management</NavLink></li>
              <li><NavLink activeClassName="active" to=""></NavLink></li>
          </ul>
      </div>
    )
  }

}
export default Header;
