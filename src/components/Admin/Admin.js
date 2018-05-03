import React, { Component } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/reducer';


class Admin extends Component {

    componentDidMount() {
        this.props.getUserInfo();
        console.log(this.props.getUserInfo)
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
 