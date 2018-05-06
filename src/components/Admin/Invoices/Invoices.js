import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Invoices.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


export default class Invoices extends Component {
    constructor() {
        super()

        this.state = {
            invoices: '',
            selected: [1],
        }
    }

    componentDidMount() {
        axios.get('/api/invoices').then(res => {
            this.setState({
                invoices: res.data
            })
            console.log(this.state)
        })
    }

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };
    
    handleRowSelection = (selectedRows) => {
        this.setState({
          selected: selectedRows,
        });
    };

    render() {

        const tableRows = _.map(_.get(this.state, 'invoices'), invoice => {
            var date = invoice.purchased.split('T')[0]
            return (
                <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>{invoice.client_name}</td>
                    <td>{invoice.client_email}</td>
                    <td>{invoice.service}</td>
                    <td>${invoice.total}</td>
                    <td>{date}</td>
                </tr>
            )
        })
        return (
            <div className='invoices'>
                <div className='invoices-sideMenu'>
                    <input placeholder='Id' />
                    <input placeholder='Name' />
                    <input placeholder='Email' />
                    <input placeholder='Service' />
                    <input placeholder='Total' />
                    <input placeholder='Purchased On' />
                </div>

                <table id='invoicesTable'>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Total</th>
                        <th>Purchased On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
          );
    }
}