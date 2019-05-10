import React, { Component } from 'react';
import './index.css';
import Header from '../Header/index'
import Terminal from '../Terminal/index'
import Footer from '../Footer/index';
import { withRouter } from "react-router-dom";

class Student extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            student: {},
        };
    }


componentDidMount() {
    const id = this.props.match.params.id
    fetch(`https://warm-sierra-59608.herokuapp.com/api/user?userId=${id}`)
        .then(res => res.json())
        .then(data =>
             this.setState({ student : data }))
             
    }

    render() {
        console.log(this.state.student)

        return (
            <React.Fragment>
                <Header />
                <div className="data-container composant">
                    <div className="student-picture">
                        <img src={this.state.student.picture} alt="idiote"/>
                    </div>
                    <ul className="data-list">
                        <li>
                            Name : {this.state.student.name}
                        </li>
                        <li>Last Name : {this.state.student.lastName}</li>
                        <li>Age : {this.state.student.age}</li>
                        <li>E-mail : {this.state.student.email}</li>
                        <li>GSM :</li>
                        <li>CV :</li>
                        <li>Soft Skills : {this.state.student.softSkills}</li>
                        <li>Hard Skills : {this.state.student.hardkils}</li>
                    </ul>
                    <div className="terminal-container">
                        <Terminal className="terminal-solution" info={this.state.student} />
                    </div>
                </div>
                <Footer className="footer" />
            </React.Fragment>
            
        );
    };
};


export default withRouter(Student);