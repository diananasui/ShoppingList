import './DeleteButton.css';
import React, { Component } from 'react';


const DeleteButton = (props) => {

    return(
      <div>
        <button id="delete-button" className="buttonStyle" onClick={props.handleDeleteItem}> Delete Item </button>
        <audio  ref={props.myAudio} >
          <source src="https://www.computerhope.com/jargon/m/example.mp3" type="audio/mp3" />
        </audio>
      </div>
    );
  }

export default DeleteButton;