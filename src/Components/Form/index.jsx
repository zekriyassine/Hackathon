import React from 'react'
import './index.css'
import Terminal from  '../Terminal/index'
import Header from '../Header/index';
import Footer from '../Footer/index';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hardSkills: [],
            softSkills: [],
            name: "",
            lastName: "",
            picture: "",
            location: "",
            cv:"",
            age:""
        }
    }
    onChange = (event) => (
        this.setState({
            [event.target.name]: event.target.value,
        })

    )

    fileChange = (event) => {
        let formData = new FormData();
        const name = event.target.name;
        formData.append('picture', event.target.files[0]);
        axios({
            method: 'post',
            url: 'https://warm-sierra-59608.herokuapp.com/api/upload',
            data: formData
          })
          .then(data => this.setState(
              {[name]: data.data}
          ))
       
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state))
        axios({
            method: 'post',
            url: 'https://warm-sierra-59608.herokuapp.com/api/add-user',
            data: this.state
          }).then(
              this.props.history.push('/home')
          )
    }
 
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="display-container composant">
                <div className="form-eleve">
                <h1 className="title-form">Ajouter un étudiant</h1>

                    <form className="item-container" onSubmit={this.handleSubmit}>
                        <div className="form-data">
                            <label htmlFor="name">Nom</label>
                            <input type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                                placeholder="Nom"

                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="lastName">Prénom</label>
                            <input type="text"
                                id="lastName"
                                name="lastName"
                                onChange={this.onChange}
                                value={this.state.lastName}
                                placeholder="Prénom"


                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="age">Age</label>
                            <input type="text"
                                id="age"
                                name="age"
                                onChange={this.onChange}
                                value={this.state.age}
                                placeholder="Age"


                            />
                        </div>
                   
                        <div className="form-data">
                            <label htmlFor="hardSkills">Hardskills</label>
                            <input type="text"
                                id="hardSkills"
                                name="hardSkills"
                                onChange={this.onChange}
                                value={this.state.hardSkills}
                                placeholder="Hardskills"


                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="softSkills">Softskills</label>
                            <input type="text"
                                id="softSkills"
                                name="softSkills"
                                onChange={this.onChange}
                                value={this.state.softSkills}
                                placeholder="Softskills"

                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="location">Email</label>
                            <input type="email"
                                id="location"
                                name="location"
                                onChange={this.onChange}
                                value={this.state.location}
                                placeholder="@exemple.com"



                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="picture">Photo</label>
                            <input className="file" type="file"
                                accept="image/*"
                                id="picture"
                                name="picture"
                                onChange={this.fileChange}
                                placeholder="Photo"



                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="cv">Votre CV</label>
                            <input className="file" type="file"
                                id="cv"
                                name="cv"
                                onChange={this.fileChange}                                
                                placeholder="Votre Curriculum vitae"

                            />
                        </div>

                        <div className="form-data">
                            <input class="button-submit" type="submit" value="Envoyer" />
                        </div>

                    </form>


                </div >
                <div className="terminal-form">
                <Terminal  info={this.state}/>
                </div>
                
                </div>
                <Footer />


            </React.Fragment>
        )
    }
}

export default withRouter(Form);