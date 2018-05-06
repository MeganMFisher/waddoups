import React, { Component } from 'react';
import axios from 'axios';
import './Footer.css';

export default class Footer extends Component {
    constructor() {
        super() 
        this.state = {
            firstName: '',
            lastName: '', 
            email: '', 
            description: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e, label) {
        this.setState({
            [label]: e.target.value
        })
    }

    handleSubmit() {
        console.log(this.state)
        if(!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.description) {
            alert('Please complete all boxes')
        } else {
            const body = {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                description: this.state.description
            }
            axios.post('/api/contactAdmin', body).then(res => {
                console.log(res.data)
            })
        }
    }

    render() {
        return (
            <div className='footer-container'>
                <input placeholder='First Name' onChange={(e) => this.handleInput(e, 'firstName')}/>
                <input placeholder='Last Name' onChange={(e) => this.handleInput(e, 'lastName')}/>
                <input placeholder='Email' onChange={(e) => this.handleInput(e, 'email')}/>
                <input placeholder='Message' onChange={(e) => this.handleInput(e, 'description')}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div> 
        )
    }
}