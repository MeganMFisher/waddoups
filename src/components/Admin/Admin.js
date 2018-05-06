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
            <div> 
                <nav>
                    <h1>Welcome Alyssa!</h1> 
                    <div>  
                        <Link to='/admin'><h3>Clients</h3></Link>     
                        <Link to='/admin/invoices'><h3>Invoices</h3></Link>  
                        <Link to='/admin/services'><h3>Services</h3></Link>              
                    </div>
                    <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
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
 