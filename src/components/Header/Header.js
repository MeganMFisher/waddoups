import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import Drawer from 'material-ui/Drawer';
import {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import logo from './../../assets/insta.jpg';
import menu from './../../assets/hamburger.svg';
import cart from './../../assets/cart.png';


export default class Header extends Component {
    constructor() {
        super() 

        this.state = {
            open: false
        }
    }

    
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }
    
    render() {
        return (
            <div className='header'> 
                <nav>
                    <div className='header-logo'>
                        <img src={logo} alt='Logo' width='50' height='50' />
                        <p>Alyssa Waddoups</p>
                    </div>
                    <div className='header-webNav'>
                        <div>
                            <Link to='/' className='header-links'>Home</Link>
                            <Link to='/training' className='header-links'>Training</Link>
                            <Link to='/contact' className='header-links'>Contact</Link>
                            <Link to='/cart' className='header-links'><img src={cart} alt='cart' width="22" height="22" /></Link>
                        </div>
                    </div>
                    <div className='header-mobileNav'>
                        <IconButton onClick={this.handleToggle}>
                            <img src={menu} width='30' height='30'/>
                        </IconButton>
                    </div>
                </nav>

                <Drawer
                docked={false} 
                width={300} 
                open={this.state.open}
                openSecondary={true}
                onRequestChange={(open) => this.setState({open})}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem primaryText='Home' />
                    </NavLink >
                    <NavLink to="/training" style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem primaryText='Training' />
                    </NavLink >
                    <NavLink to="/contact" style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem primaryText='Contact' />
                    </NavLink >
                    <NavLink to="/cart" style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem primaryText='Cart' />
                    </NavLink >
                </Drawer>
            </div> 
        )
    }
}