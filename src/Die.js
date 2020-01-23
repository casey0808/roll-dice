import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    static defaultProps = {
        dicenum : [
            "fa fa-dice-one",
            "fa fa-dice-two",
            "fa fa-dice-three",
            "fa fa-dice-four", 
            "fa fa-dice-five", 
            "fa fa-dice-six"
          ]
    }
    render(){
        return(
            <span className={`${this.props.dicenum[this.props.num]} ${this.props.shaking? 'shaking': ''}`}></span>
        )
    }
}

export default Die;