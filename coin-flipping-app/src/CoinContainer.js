import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";


class CoinContainer extends Component{
    static defaultProps = {
        coins: [
            {
                imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
                side: "head"
            },
            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaOFwonmXozKp0eSrgWLnF4DPqNwm68qIYg&usqp=CAU ",
                side: "tail"
            }]
    }

    constructor(props) {
        super(props)
        this.state = {
            curCoin:"",
            nFlip: 0,
            nHeads: 0,
            nTails: 0,
            
        }
        this.handleClick = this.handleClick.bind(this);
       
    
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st=>{
            return {
                curCoin: newCoin,
                nFlip: st.nFlip + 1,
                nHeads: st.nHeads + (newCoin.side === "head" ? 1 : 0),
                nTails: st.nTails + (newCoin.side ==="tail"? 1:0),
            };
         
        }) 
    }       
    handleClick(e) {
        this.flipCoin();
    }
    
    render() {
     console.log(this.state.curCoin)

        return (

            <div className="CoinContainer">
                <h2>let"s flip a Coin</h2>
                <button onClick={this.handleClick} >Flip Me </button>
             
               <Coin info={ this.state.curCoin}/>
                <p>Out of {this.state.nFlip} flips,there,have been {this.state.nHeads} heads and { this.state.nTails}</p>
                
            </div>
        )
    }
}

export default CoinContainer;