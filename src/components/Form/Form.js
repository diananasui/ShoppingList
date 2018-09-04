import './Form.css';
import React, { Component } from 'react';


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

class Form extends React.Component{
    state = {name: '',
            image: null};
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({ name: '',image: null});
    };
    
    render(){
      return(
        <form onSubmit = {this.handleSubmit} >
          <input type="text" 
                          value = {this.state.name}
                  onChange={(event) => this.setState({ name: event.target.value})}
                        placeholder="Item Name" 
                        className="inputNameStyle" required />
          <span className="fa fa-image fa-2x icons">
          <input type="file" id="photo" className="inputFileStyle" onChange={(event) => this.setState({ image: URL.createObjectURL(event.target.files[0])})} />
          </span>
          <button type="submit" className="buttonStyle"> Add Item </button>
        </form>
      );
    }
  }

export default Form;