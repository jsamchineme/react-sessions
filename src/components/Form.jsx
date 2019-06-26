import React, { useState } from 'react'

const Form = () => {
  const [formInput, setFormInput] = useState({
    firstname: 'John',
    lastname: 'Keneth',
    password: '',
    categories: 2
  });

  const saveInput = (field, value) => {
    const newFormInput = {...formInput};
    newFormInput[field] = value;
    setFormInput(newFormInput);
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log('formInput', formInput);
  }

  const categories = [
    {
      id: 1,
      name: 'tech'
    },
    {
      id: 2,
      name: 'fashion'
    },
    {
      id: 3,
      name: 'gists'
    },
  ];

  const optionsList = [<option key="0">Select Options</option>];

  categories.forEach(item => {
    optionsList.push(<option key={item.id} value={item.id}>{item.name}</option>);
  });

  return (
    <form onSubmit={submitForm}>
      <input 
        type="text" 
        name="firstname" 
        value={formInput.firstname} 
        onChange={(e) =>  saveInput(e.target.name, e.target.value)}
      />
      <input 
        type="text" 
        name="lastname" 
        value={formInput.lastname} 
        onChange={(e) =>  saveInput(e.target.name, e.target.value)}
      />
      <input 
        type="password" 
        name="password" 
        value={formInput.password}
        onChange={(e) =>  saveInput(e.target.name, e.target.value)}
      />
      <select 
        name="categories" 
        id="" value={formInput.categories}
        onChange={(e) =>  saveInput(e.target.name, e.target.value)}>
        {optionsList}
      </select>
      <button type='submit'>Save Form</button>
      
    </form>
  );
}

export default Form;