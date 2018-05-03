import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Cart.css';


export default class Cart extends Component {
    render() {
        return (
            <div> 
                <Header/>
                <h1>Cart</h1> 
                <Footer/>
            </div> 
        )
    }
}