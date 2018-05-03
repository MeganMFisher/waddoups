import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <div> 
                <Header/>
                <h1>Home</h1>
                <Footer/>
            </div> 
        )
    }
}