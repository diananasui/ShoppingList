import './Form.css';
import React from 'react';

class Form extends React.Component{
    state = {name: '',
            image: null};
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({ name: '', image: null});
    };
    
    render(){
      return(
        <form onSubmit={this.handleSubmit} >
          <input type="text" 
                 value={this.state.name}
                 onChange={(event) => this.setState({ name: event.target.value})}
                 placeholder="Item Name" 
                 className="input_name"
                 required />
          <span className="fa fa-image fa-2x icons">
          <input type="file" 
                 className="input_file" 
                 onChange={(event) => this.setState({ image: URL.createObjectURL(event.target.files[0])})} />
          </span>
          <button type="submit" className="button"> Add Item </button>
        </form>
      );
    }
  }

export default Form;