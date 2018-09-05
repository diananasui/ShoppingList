import React, { Component } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList/ShoppingList';
import DeleteButton from './components/DeleteButton/DeleteButton';
import Form from './components/Form/Form';
import PopUp from './components/PopUp/PopUp';

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
    this.setState({
      items: [...this.state.items, itemInfo]
    });
    this.togglePopup();
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
    const node = this.state.myAudio.current;
    node.play();
    if(this.state.items.length===1)
      {this.state.items.pop();}
    else{
      this.deleteItem(this.state.selectedItem);
    }
  }
  
  render() {
    return (
      <div className="page">
        <div className="page_form" >
          <h2 className="page_form_title"> Shopping List </h2>
          <Form onSubmit={this.addNewItem} />
          <ShoppingList  items={this.state.items}
                         handleChangeItem={this.handleChangeItem}
                         selectedItem={this.state.selectedItem} />
          <DeleteButton handleDeleteItem={this.handleDeleteItem}
                        myAudio={this.state.myAudio} />
          <PopUp show={this.state.showPopup}
                 onClose={this.togglePopup} />
        </div>
      </div>
    );
  }
}

export default App;
