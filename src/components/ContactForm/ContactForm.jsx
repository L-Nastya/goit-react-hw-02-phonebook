import { React, Component } from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import styled from "styled-components";

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
        this.props.onSubmit(name, number);
         this.reset();
    };
    reset = () => {
         this.setState({name: '', number: ''})
    }
    render() {

        return (
            <Form onSubmit={this.submitForm}>
                 <FormLabel htmlFor={this.nameInputId}>Name
                 <FormInput
                     type="text"
                     name="name"
                     id={this.nameInputId}
                     value={this.state.name}
                     onChange ={this.updateInput}
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                    />
                 </FormLabel>
                 <FormLabel htmlFor={this.numberInputId}>Phone
                  <FormInput
                     type="tel"
                     name="number"
                     id={this.numberInputId}
                     value={this.state.number}
                     onChange ={this.updateInput}
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                    />
                 </FormLabel>
                <FormBtn type="submit">ADD CONTACT</FormBtn>
            </Form>
            
        )
    }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default ContactForm;

const Form = styled.form`
    display: grid;
    
`;
const FormLabel = styled.label`
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 15px;
`;
const FormInput = styled.input`
 margin-left: 20px;
 box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 2px;
    border: none;
`;

const FormBtn = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 25px;
    background-color: #fdfda3;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
     &:hover{
    background-color: #f3da90;
     transform: scale(1.02);
 }
`;