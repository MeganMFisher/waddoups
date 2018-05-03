import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import Header from '../Header/Header';


export default class Home extends Component {
    render() {
        return (
            <div> 
                <Header/>
                <h1>Home</h1>
            </div> 
        )
    }
}