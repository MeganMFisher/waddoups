import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import Drawer from 'material-ui/Drawer';
import {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';


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
                    <img src='../../assets/insta.png' alt='Logo' width='50' height='50' />
                    <div className='webNav'>
                        <Link to='/' className='links'>Home</Link>
                        <Link to='/training' className='links'>Training</Link>
                        <Link to='/contact' className='links'>Contact</Link>
                        <Link to='/cart' className='links'><img src='../../assets/cart.png' alt='cart' width="32" height="32" /></Link>
                    </div>
                    <div className='mobileNav'>
                        <IconButton onClick={this.handleToggle}>
                            <img src='https://cdn2.iconfinder.com/data/icons/mobile-and-web/100/menu1-512.png' width='50' height='50'/>
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