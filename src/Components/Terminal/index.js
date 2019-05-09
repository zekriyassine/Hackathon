import React from 'react';
import './index.css';

class Terminal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { eleve : this.props.info || ""
        };
    };
    render() {  
        const { eleve } = this.state;
        return(
            <code> { JSON.stringify(eleve) } <span class="blink">_</span></code>

        )
} 
}
    export default Terminal;
