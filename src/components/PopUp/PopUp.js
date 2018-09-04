
import './PopUp.css';
import React, { Component } from 'react';

class PopUp extends React.Component {

    closePopup = (event) => {
        this.props.onClose();
    }

    render(){
        return(
            <div className={this.props.show ? 'modal show-modal' : 'modal' } id="modalId">
                <div className="modal-content">
                    <span onClick={this.closePopup} className="close-button" id="closeButton">&times;</span>
                    <h3>Item added successfuly!</h3>
                </div>
            </div>
        );
    }
}

export default PopUp;