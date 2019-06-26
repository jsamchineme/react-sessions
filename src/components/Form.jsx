import React, { Component } from 'react';


class Form extends Component {
  state = {
    email: 'mail@g.com',
    password: '',
  }

  handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({
      [field]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
  
    console.log({email, password});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text" 
          name='email' 
          placeholder='email'
          ref={(ref) => this.email = ref}
          onChange={() => this.handleChange()}
        />
        <input 
          type="text"
          name='password' 
          placeholder='password'
          ref={(ref) => this.password = ref}
        />
    
        <button type='submit'>Signup</button>
      </form>
    );
  }
}

export default Form;