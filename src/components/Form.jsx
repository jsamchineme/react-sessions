import React, { Component } from 'react';
import './form.scss';


class Form extends Component {
  state = {
    name: 'sam'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.name.value);
  }

  handleInputChange = (e) => {
    console.log(this.name.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        {/* <button className="action-button" onClick={() => switchView('form')}>Create Product</button> */}

        <form onSubmit={this.handleSubmit}>
          <input 
            ref={(ref) => this.name = ref}
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange} 
          />
          <input
            ref={(ref) => this.name = ref}
            name='lastname'
            value={this.state.name}
            onChange={this.handleInputChange} 
          />
          <button type='button'>Submit</button>
        </form>

      </div>
    )
  }
}

export default Form;