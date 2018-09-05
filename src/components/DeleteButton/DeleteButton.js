import './DeleteButton.css';
import React from 'react';


const DeleteButton = (props) => {

    return(
      <div>
        <button className="button" onClick={props.handleDeleteItem} > Delete Item </button>
        <audio  ref={props.myAudio} >
          <source src="https://www.computerhope.com/jargon/m/example.mp3" type="audio/mp3" />
        </audio>
      </div>
    );
  }

export default DeleteButton;