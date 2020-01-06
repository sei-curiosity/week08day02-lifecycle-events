import React, { Component } from 'react';
import memList from './data/memList';

class Meme extends Component {
    constructor(props) {
        super()
        this.state = {
            visible:true
        }
    }

    render() { 
        return ( 
            <div>
                {this.props.title}
            </div>
         );
    }
}
 
export default Meme;