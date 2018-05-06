import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div> 
                <nav>
                    <img src='../../assets/insta.png' alt='Logo' width='50' height='50' />
                    <div>
                        <Link to='/' className='links'>Home</Link>
                        <Link to='/training' className='links'>Training</Link>
                        <Link to='/contact' className='links'>Contact</Link>
                        <img src='../../assets/cart.png' width="32" height="32" />
                    </div>
                </nav>
            </div> 
        )
    }
}