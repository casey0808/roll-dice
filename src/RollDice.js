import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }
    roll(){
        this.setState({
            num1: Math.floor(Math.random() * 6),
            num2: Math.floor(Math.random() * 6),
            rolling: true
        })
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000);
    };

    render(){
        return(
            <div className="RollDice">
                <div style={{"textAlign": "center"}}>
                    <Die num={this.state.num1} shaking={this.state.rolling} />
                    <Die num={this.state.num2} shaking={this.state.rolling} />
                </div>
                <button onClick={this.roll} 
                    disabled={this.state.rolling}>
                    {this.state.rolling === true? 'Rolling...'
                     : 'Roll Dice!'}
                </button>   
            </div>
        )
    }

}

export default RollDice;