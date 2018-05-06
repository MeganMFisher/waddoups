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
        console.log(this.firstName.value)
        if(!this.firstName.value || !this.lastName.value || !this.email.value || !this.description.value) {
            alert('Please complete all boxes')
        } else {
            const body = {
                first_name: this.firstName.value,
                last_name: this.lastName.value,
                email: this.email.value,
                description: this.description.value
            }
            console.log('body', body)
            axios.post('/api/contactAdmin', body).then(res => {
                this.firstName.value = '';
                this.lastName.value = '';
                this.email.value = '';
                this.description.value = '';
            })
        }
    }

    render() {
        return (
            <div className='footer-container'>
                <input placeholder='First Name' ref={input => this.firstName = input}/>
                <input placeholder='Last Name' ref={input => this.lastName = input}/>
                <input placeholder='Email' ref={input => this.email = input}/>
                <input placeholder='Message' ref={input => this.description = input}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div> 
        )
    }
}