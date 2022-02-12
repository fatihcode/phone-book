import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class Contact extends Component {

    state = {
        contacts: [
            { name: "Joseph Miller", phone: "2818420468" },
            { name: "Julia Loftis", phone: "9703276847" },
            { name: "Edward Bascom", phone: "5029691948" },
            { name: "Caroline Armenta", phone: "9259880510" },
            { name: "Lillian Dixon", phone: "2018977581" },
            { name: "Mark Friend", phone: "3015204707" },
            { name: "Presley Blanda", phone: "6246836725" }
        ]
    }

    render() {

        const addContact = (data) => {
            const { contacts } = this.state
            contacts.push(data)
            this.setState({ contacts })
        }

        const change = (data) => {
            this.setState({ contacts: data })
        }

        return (
            <>
                <h1 className="display-4 mb-3"><i className="bi bi-person-lines-fill display-4"> </i>Contacts</h1>
                <List change={change} contacts={this.state.contacts} />
                <Form addContact={addContact} contacts={this.state.contacts} />

            </>);
    }
}
