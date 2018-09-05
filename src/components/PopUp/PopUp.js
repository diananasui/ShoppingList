
import './PopUp.css';
import React from 'react';

const PopUp = (props) => {

    return(
        <div className={props.show ? 'modal modal_show' : 'modal'} >
            <div className="modal-content">
                <button onClick={props.onClose} className="close-button" > &times; </button>
                <h3> Item added successfuly! </h3>
            </div>
        </div>
    );
}

export default PopUp;