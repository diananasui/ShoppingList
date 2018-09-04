import './ShoppingList.css';
import React, { Component } from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

const ShoppingList = (props) => {
    //1) display as a list
    //2) display as a dropdown
    
    return(
      <div>
        
        <div className="container" id="containerId">
            {props.items.map(item => <ShoppingItem key = {item.name} {...item}/> )}
        </div>
        <br />
        <select value={props.selectedItem} id="myDropdown" className="styleDropdown" onChange={props.handleChangeItem} /*onChange={(event) => console.log(event.target.options[event.target.selectedIndex].text)}*/ > 
          <option selected value="Select item"> Select item </option>
          {props.items.map(item => <option className="myOption" key={item.name} value={item.name}> {item.name} </option>)}
        </select> 
        <br /> <br />
      </div>
    );
  }

export default ShoppingList;