import './ShoppingList.css';
import React from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

const ShoppingList = (props) => {
    
    return(
      <div>
        <div className="container" >
            {props.items.map(item => <ShoppingItem key = {item.name} {...item}/> )}
        </div>
        <br />
        <select value={props.selectedItem} className="select" onChange={props.handleChangeItem} > 
          <option selected value="Select item"> Select item </option>
          {props.items.map(item => <option className="select-option" key={item.name} value={item.name}> {item.name} </option>)}
        </select> 
        <br /> <br />
      </div>
    );
  }

export default ShoppingList;