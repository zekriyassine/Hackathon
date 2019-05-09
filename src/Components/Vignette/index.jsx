import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css'

class Vignette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perso: [],
            startIndex: 0,

        }
    }

    componentDidMount = () => (
        fetch("https://warm-sierra-59608.herokuapp.com/api/users")
            .then(res => res.json())
            .then(data =>
                this.setState({
                    perso: data

                }))
    )

    addOne = () => (
        this.setState({
            startIndex: this.state.startIndex + 1

        })
    )
    removeOne = () => (
        this.setState({
            startIndex: this.state.startIndex - 1

        })
    )
    
    render() {

        let addIndex = 1
        const mq = window.matchMedia( "(min-width: 500px)" );
        if (mq.matches) {
            addIndex = 2
            this.addOne = () => (
                this.setState({
                    startIndex: this.state.startIndex + 2
        
                })
            )
            this.removeOne = () => (
                this.setState({
                    startIndex: this.state.startIndex - 2
        
                })
            )
            
            const lq = window.matchMedia( "(min-width: 900px)" );
            if (lq.matches) {
                addIndex = 3
                this.addOne = () => (
                    this.setState({
                        startIndex: this.state.startIndex + 3
            
                    })
                )
                this.removeOne = () => (
                    this.setState({
                        startIndex: this.state.startIndex - 3
            
                    })
                )
                
                
            }
        }

        const listEleve = this.state.perso.slice(this.state.startIndex, addIndex + this.state.startIndex).map(elem => (
            <NavLink to={`./Student/${elem.id}`} className="vignette-enfant">
                <div className="image-container">
                <img className="image-student" src={elem.picture} alt="Etudiant" />
                </div>


                <div className="description">
                    <p>{elem.name} {elem.lastName}</p>
                    <p>{elem.hardSkills.join(" ")}</p>
                </div>
            </NavLink>
        ))
      
        return (
            <React.Fragment>
                <div class="vignette-parent">
                       <label onClick={this.removeOne} className="prev">&#x2039;</label>
                    {listEleve}
                    <label onClick={this.addOne} className="next">&#x203a;</label>
                </div>




            </React.Fragment>
        )
    }
}

export default Vignette;
