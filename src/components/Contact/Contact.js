import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header/> 
                <h1>Contact</h1>
                <Footer/> 
            </div> 
        )
    }
}