import React from 'react';
import './index.css';

class Terminal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { eleve : this.props.info
        };

   

    };
    render() {  
        return(
            <code>{this.props.info.toString()}<span class="blink">_</span></code>

        )
} 
}
    export default Terminal;
