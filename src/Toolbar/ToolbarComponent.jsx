import React, { Component } from 'react';
import './style.css'
import '../common.css';

export default class ToolBarComponent extends Component {

    renderDropDownButton() {
        return <div className="w3-dropdown-hover more-options">
  <button className="w3-button profile-dropdown">More Options</button>
  <div className="w3-dropdown-content w3-bar-block w3-border">
    <button  className="w3-bar-item w3-button profile-dropdown" onClick = {this.props.handleMyFundClick}>My Funds</button>
    <button className="w3-bar-item w3-button profile-dropdown" onClick = {() => window.location.reload()}>Log Out</button>
  </div>
</div>


    }


    render() {
        return (
            <div className="toolbar">
                <div style ={{display:"flex"}}>
                    <button id="openNav" className=" custom-button" onClick={this.props.onToggleButtonClick}>&#9776;</button>
                    <p className = "welcome-header"> {`Welcome Back ${this.props.user.firstName}  ${this.props.user.lastName}`} </p>
                    {this.renderDropDownButton()}
                </div>
            </div>
        );
    }
}

//<button onClick={() => window.location.reload()}>Logout</button>
