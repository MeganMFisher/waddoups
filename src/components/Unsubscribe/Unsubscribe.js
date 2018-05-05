import React, { Component } from 'react';
import axios from 'axios';
import './Unsubscribe.css';


export default class Unsubscribe extends Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handleUnsubscribe = this.handleUnsubscribe.bind(this)
    }

    handleUnsubscribe() {
        axios.put('/api/unsubscribe', {email: this.state.email}).then(res =>  {
            if(res.data) {
                console.log("You've been unsubscribed")
            } else {
                console.log("That email does not exist in our system")
            }
        })
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div> 
                <input onChange={(e) => this.handleEmail(e)}/>
                <button onClick={this.handleUnsubscribe}>Unsubscribe</button>
            </div> 
        )
    }
}