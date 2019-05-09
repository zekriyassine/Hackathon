import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css'

class Vignette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perso: [],
            startIndex: 0,
            endIndex: 0,

        }
        this.resize = "";
    }

    componentDidMount = () => {
        fetch("https://warm-sierra-59608.herokuapp.com/api/users")
            .then(res => res.json())
            .then(data =>
                this.setState({
                    perso: data

                }))
        this.resize = window.addEventListener('resize', this.handleRezise);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.perso !== this.state.perso){
            this.handleRezise();
        }
        
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.resize);
    }
    
    handleRezise = () => {
        let index = 1;
        if(window.matchMedia("(min-width: 900px)").matches){
            index = 3;
            
        }else if(window.matchMedia("(min-width: 500px)").matches){
            index = 2;
        }
        this.setState({
            endIndex : index
        })
    }

 addOne = () => (
        this.setState({
            startIndex: this.state.startIndex + this.state.endIndex

        })
    )
    removeOne = () => (
        this.setState({
            startIndex: this.state.startIndex - this.state.endIndex

        })
    )
    
    render() {  
        const { startIndex, endIndex } = this.state;
      
        const listEleve = this.state.perso.slice(startIndex, startIndex + endIndex).map(elem => (
            <NavLink to={`./Student/${elem.id}`} className="vignette-enfant">
                <div className="image-container" style={{backgroundImage: `url(${elem.picture})`}}>
                </div>


                <div className="description">
                    <p>{elem.name} {elem.lastName}</p>
                    <p>{elem.hardSkills.join(" ")}</p>
                </div>
            </NavLink>
        ))
      
        return (
            <React.Fragment>
                <div className="vignette-parent">
                       <label onClick={this.removeOne} className="prev">&#x2039;</label>
                    {listEleve}
                    <label onClick={this.addOne} className="next">&#x203a;</label>
                </div>




            </React.Fragment>
        )
    }
}

export default Vignette;
