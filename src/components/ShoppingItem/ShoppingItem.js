import './ShoppingItem.css';
import React, { Component } from 'react';

const ShoppingItem = (props) => {

    return(
      <div>
        <div className="box" id="myBox">
            <span style={{marginRight: '40px', fontFamily: 'Dancing Script'}}> {props.name.toUpperCase()} </span>
            <img  height='90px' src={props.image} />
        </div>
        <br/>
      </div>
    );
  }

  export default ShoppingItem;