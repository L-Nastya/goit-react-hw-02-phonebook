import { React, Component } from "react";
import shortid from "shortid";
import styled from "styled-components";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }
  addContact = (name,number) => {
    const newContact = {
        id: shortid.generate(),
        name,
        number,
    } 
     if (this.state.contacts.find(contact => contact.name === name)) {
            alert("This contact is already in your list") 
            return
         };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
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

  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    const visibleTodos = this.getVisibleTodos();
    return (
      <SectionStyle>
    <Section title="PhoneBook">
         <ContactForm onSubmit={this.addContact} />
       </Section>
        <Section title="Contacts">
          <Filter
            value={this.filter}
            onChange={this.changeFilter}
          />
         <ContactList
            contacts={visibleTodos}
            onDelete={this.deleteContact}
           />
        </Section>
        </SectionStyle>
  );
  }
 
};
export default App

const SectionStyle = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 15px;
  margin: 70px auto;
  box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  background-color: #ebdacf;

`;