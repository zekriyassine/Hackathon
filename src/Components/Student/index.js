import React, { Component } from 'react';
import './index.css';


class Student extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            student: [],
        };
    }


componentDidMount() {
    const id = this.props.match.params.id
    fetch(`https://warm-sierra-59608.herokuapp.com/api/users${id}`)
        .then(res => res.json())
        .then(data =>
             this.setState({ student : data }))
             
    }

    render() {


        return (
            <div className="Student">

                <ul>
                    <li>
                        Name : {this.state.student.name}
                    </li>
                    <li>Last Name : {this.state.last}</li>
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
        );
    };
};


export default Student;