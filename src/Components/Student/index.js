import React, { Component } from 'react';
import './index.css';
import Header from '../Header/index'
import Terminal from '../Terminal/index'

class Student extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            student: {},
        };
    }


componentDidMount() {
    
    fetch(`https://warm-sierra-59608.herokuapp.com/api/user?userId=`)
        .then(res => res.json())
        .then(data =>
             this.setState({ student : data }))
             
    }

    render() {
        console.log(this.state.student)

        return (
            <React.Fragment>
            <Header />
            <div className="Student">

                <ul>
                    <li>
                        Name : {this.state.student.name}
                    </li>
                    <li>Last Name : {this.state.lastName}</li>
                    <li>Gender : {this.state.student.gender}</li>
                    <li>Age : {this.state.student.age}</li>


                    <li>E-mail : {this.state.student.email}</li>
                    <li>GSM :</li>
                    <li>
                        Location : {this.state.student.location},
                    
                    </li>
                    <li>CV :</li>
                    <li>Soft Skills : {this.state.student.softSkills}</li>
                    <li>Hard Skills : {this.state.student.hardkils}</li>
                </ul>
            </div>
            <Terminal info={this.state.student} />
            </React.Fragment>
        );
    };
};


export default Student;