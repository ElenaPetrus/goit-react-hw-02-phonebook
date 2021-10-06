/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/FIlter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number,
      )
    ) {
      alert(`${contact.name} witn ${contact.number} is already in Contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   if (contacts.find(contact => contact.name.toLowerCase() === filter.toLowerCase(),)) {

  //     contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),)
  //   } else if (contacts.find(contact => contact.number === filter)){
  //     contacts.filter(contact =>
  //       contact.number.includes(filter),)
  //   } else {
  //      alert (`Соntact ${filter} is not on the ContactList`)}
  // };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const totalContactCount = contacts.length;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <span> Total contacts:{totalContactCount}</span>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
