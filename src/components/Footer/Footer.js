import React, { Component } from 'react';
import axios from 'axios';
import './Footer.css';
import RaisedButton from 'material-ui/RaisedButton';
import SubFooter from './SubFooter/SubFooter';

export default class Footer extends Component {
    handleSubmit() {
        if(!this.firstName.value || !this.lastName.value || !this.email.value || !this.description.value) {
            alert('Please complete all boxes')
        } else {
            const body = {
                first_name: this.firstName.value,
                last_name: this.lastName.value,
                email: this.email.value,
                description: this.description.value
            }
            axios.post('/api/contactAdmin', body).then(res => {
                this.firstName.value = '';
                this.lastName.value = '';
                this.email.value = '';
                this.description.value = '';
            })
        }
    }

    render() {
        const styles = {
            width: '250px'
        }

        return (
            <div>
                <div className='footer'>
                    <div className='footer-inputs'>
                        <input placeholder='First Name' ref={input => this.firstName = input}/>
                        <input placeholder='Last Name' ref={input => this.lastName = input}/>
                        <input placeholder='Email' ref={input => this.email = input}/>
                        <input placeholder='Message' ref={input => this.description = input}/>
                    </div>
                    <RaisedButton style={styles}label='Submit' onClick={this.handleSubmit.bind(this)} />
                </div>
                <SubFooter/>
            </div> 
        )
    }
}