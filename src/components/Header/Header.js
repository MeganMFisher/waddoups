import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div> 
                <nav>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBE6aJcSPsp9QN4f0iPm5rRJ8uwxZCYAILFacqOPUjjWpz7jk' alt='Logo' width='50' height='50' />
                    <div>
                        <Link to='/' className='links'>Home</Link>
                        <Link to='/training' className='links'>Training</Link>
                        <Link to='/contact' className='links'>Contact</Link>
                    </div>
                </nav>
            </div> 
        )
    }
}