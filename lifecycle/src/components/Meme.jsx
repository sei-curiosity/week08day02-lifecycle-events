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
               <h1> {this.props.title} </h1>
              <img src={this.props.image}></img>

            </div>
         );
    }
}
 
export default Meme;