import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList/ShoppingList';
import DeleteButton from './components/DeleteButton/DeleteButton';
import Form from './components/Form/Form';
import PopUp from './components/PopUp/PopUp';


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

class App extends Component {
  state = {
    items: [ ],
    selectedItem: '',
    myAudio: React.createRef(),
    showPopup: false,
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  addNewItem = (itemInfo) => {
    
    this.setState(prevState => ({
      items: prevState.items.concat(itemInfo)
    }))
    this.togglePopup();
    //document.querySelector('.modal').classList.toggle('show-modal');
  };

  handleChangeItem = (event) => {
    this.setState({selectedItem: event.target.selectedOptions[0].text})
    //this.setState({selectedItem: event.target.options[event.target.selectedIndex].text });
  }

  deleteItem = (itemName) => {
    this.setState(({items}) => ({
      items: items.filter( i => i.name !== itemName)
    }));
  }

  handleDeleteItem = (event) => {
    const node = this.state.myAudio.current; //the <audio> tag is returned
    node.play();
    if(this.state.items.length===1)
      {this.state.items.pop();}
    else{
      this.deleteItem(this.state.selectedItem);
    }
  }

  closeModal = () => {
    this.togglePopup();
  }

  render() {
    return (
      <div className="bg">
        <div className="myForm" >
          <h2 className = "title"> Shopping List </h2>
          <Form onSubmit = {this.addNewItem} />
          <ShoppingList  items = {this.state.items}
                         handleChangeItem = {this.handleChangeItem}
                         selectedItem = {this.state.selectedItem} />
          <DeleteButton handleDeleteItem = {this.handleDeleteItem}
                        myAudio = {this.state.myAudio} />
          <PopUp show = {this.state.showPopup} onClose={this.closeModal} />
        </div>
      </div>
    );
  }
}

export default App;
