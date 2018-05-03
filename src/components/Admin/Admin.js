import React, { Component } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUserInfo } from './../../ducks/reducer';


class Admin extends Component {

    componentDidMount() {
        axios.get('/auth/authorized').then(user => { 
            if(!user.data) {
              this.props.history.push('/') 
            } 
        })  

        this.props.getUserInfo();
    }

    render() {
        return (
            <div> 
                <h1>Admin</h1> 

                <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
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
 