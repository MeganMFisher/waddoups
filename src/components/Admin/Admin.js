import React, { Component } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUserInfo } from './../../ducks/reducer';
import {Switch, Route, Link} from 'react-router-dom';
import Clients from './Clients/Clients';
import Invoices from './Invoices/Invoices';
import Services from './Services/Services';


class Admin extends Component {

    componentDidMount() {
        // axios.get('/auth/authorized').then(user => { 
        //     if(!user.data) {
        //       this.props.history.push('/') 
        //     } 
        // })  
        this.props.getUserInfo();
    }

    render() {
        return (
            <div className='admin'> 
                <nav>
                    <h1>Welcome Alyssa!</h1> 
                    <div className='admin-links'> 
                            <Link to='/admin'><p>Clients</p></Link>     
                            <Link to='/admin/invoices'><p>Invoices</p></Link>  
                            <Link to='/admin/services'><p>Services</p></Link>              
                        <a href='http://localhost:3005/auth/logout'><p>Sign Out</p></a>
                    </div>

                </nav>
                <div>
                    <Switch>
                        <Route component={ Invoices } path="/admin/invoices" />
                        <Route component={ Services } path="/admin/services" />
                        <Route path="/admin" render={() => (
                            <div>
                                <Clients/>
                            </div>   
                        )}/>
                    </Switch>
                </div>

            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

let outputActions = {
    getUserInfo, 
} 

export default connect( mapStateToProps, outputActions)(Admin);
 