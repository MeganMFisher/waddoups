import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Training.css';

export default class Training extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Training</h1> 
                <Footer/>
            </div> 
        )
    }
}