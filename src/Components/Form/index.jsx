import React from 'react'
import './index.css'
import Terminal from  '../Terminal/index'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            hardSkills: "",
            softSkills: "",
            name: "",
            lastName: "",
            picture: "",
            location: "",
            cv:"",


        }
    }
    onChange = (event) => (
        this.setState({
            [event.target.name]: event.target.value,
        })

    )
    handleSubmit = (event) => {
        event.preventDefault();
        const url = "https://warm-sierra-59608.herokuapp.com/api/users";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Elève enrengistré`);
                }
            })
    }
 
    render() {
        return (
            <React.Fragment>
                <Terminal info={this.state}/>
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
                                onChange={this.onChange}
                                value={this.state.picture}
                                placeholder="Photo"



                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="cv">Votre CV</label>
                            <input className="file" type="file"
                                id="cv"
                                name="cv"
                                onChange={this.onChange}
                                value={this.state.cv}
                                placeholder="Votre Curriculum vitae"

                            />
                        </div>

                        <div className="form-data">
                            <input class="button-submit" type="submit" value="Envoyer" />
                        </div>

                    </form>


                </div>

            </React.Fragment>
        )
    }
}

export default Form;