import { React, Component } from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';

class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    };
     
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    updateInput = event => {
         const { name, value} = event.currentTarget
         this.setState({ [name]: value })
    };
    submitForm = e => {
        e.preventDefault();
        const {name, number} = this.state
        if (this.props.contacts.find(contact => contact.name === name)) {
            alert("This contact is already in your list") 
            return
         };
        
        this.props.onSubmit(name, number);
         this.reset();
    };
    reset = () => {
         this.setState({name: '', number: ''})
    }
    render() {

        return (
            <form onSubmit={this.submitForm}>
                 <label htmlFor={this.nameInputId}>Name
                 <input
                     type="text"
                     name="name"
                     id={this.nameInputId}
                     value={this.state.name}
                     onChange ={this.updateInput}
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                    />
                 </label>
                 <label htmlFor={this.numberInputId}>Phone
                  <input
                     type="tel"
                     name="number"
                     id={this.numberInputId}
                     value={this.state.number}
                     onChange ={this.updateInput}
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                    />
                 </label>
                <button type="submit">ADD CONTACT</button>
            </form>
            
        )
    }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
}
export default ContactForm