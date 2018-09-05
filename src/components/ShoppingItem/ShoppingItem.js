import './ShoppingItem.css';
import React from 'react';

const ShoppingItem = (props) => {

    return(
      <div>
        <div className="box" >
            <span style={{marginRight: '40px', fontFamily: 'Dancing Script'}}> {props.name.toUpperCase()} </span>
            <img  height='90px' src={props.image} alt="No img added"/>
        </div>
        <br/>
      </div>
    );
  }

  export default ShoppingItem;