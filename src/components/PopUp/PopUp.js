
import './PopUp.css';
import React, { Component } from 'react';

class PopUp extends React.Component {

    openPopup = () => {
        document.querySelector('.modal').classList.toggle('show-modal');
    }

    closePopup = (event) => {
        document.querySelector('.modal').classList.remove('show-modal');
    }

    render(){
        return(
            <div className="modal" id="modalId">
                <div className="modal-content">
                    <span onClick={this.closePopup} className="close-button" id="closeButton">&times;</span>
                    <h3>Item added successfuly!</h3>
                </div>
            </div>
        );
    }
}

export default PopUp;