import React, {Component} from 'react';
import './style.css';
import loginIcon from '../images/user-icon.svg';
import signupIcon from '../images/signup-icon.png';

export default class LoginFormComponent extends Component {

    renderTabs() {
        const loginClass = this.props.loginActive ? "active" : "inactive";       
        const signupClass = this.props.loginActive ? "inactive" : "active";
        return(
            <div className = "login-description">
                <button className = {`login-text ${loginClass}`} onClick = {this.props.onLoginTabClick}>Login</button>
                <button className = {`login-text ${signupClass}`} onClick = {this.props.onSignUpTabClick}> SignUp</button>
            </div>
       );
    }

    renderLoginForm() {
        return(
            <form className = "login-form" action="/action_page.php">
                Email:<br/>
                <input type="text" name="firstname" value = {this.props.email}  onChange = {this.props.handleEmailChange} className = "form-input"/>
                <br/>
                Password:<br/>
                <input type="password" name="lastname" value="Mouse" value = {this.props.password}  onChange = {this.props.handlePasswordChange} className = "form-input"/>
                <br/><br/>
                {this.props.showErrorMessage && <p style = {{color:"red", marginTop : "0"}} >{this.props.message}</p>}
                <button type="button" className = "form-button" onClick = {this.props.handleLoginSubmit}>Login</button>
            </form> 
        );
    }

    renderUserRegistrationForm() {
        return(
            <form className = "login-form" action="/action_page.php">
                <div className = "signup-container">
                    <div>
                    <p >First Name :</p>
                    <input type="text" name="firstname" value = {this.props.firstName}  onChange = {this.props.handleFirstNameChange} className = "user-form-input"/>
                    </div>
                    <div style = {{float:"right"}}>
                    <p>Last Name :</p>
                    <input type="text" name="firstname" value = {this.props.lastName}  onChange = {this.props.handleLastNameChange} className = "user-form-input"/>
                    </div>
                </div>
                <br/>
                Email:<br/>
                <input type="text" name="firstname" value = {this.props.email}  onChange = {this.props.handleEmailChange} className = "form-input"/>
                <br/>
                Password:<br/>
                <input type="password" name="lastname" value="Mouse" value = {this.props.password}  onChange = {this.props.handlePasswordChange} className = "form-input"/>
                <br/><br/>
                {this.props.showErrorMessage && <p style = {{color:"red", marginTop : "0"}} >{this.props.message}</p>}
                <button type="button" className = "form-button" onClick = {this.props.handleSignUpSubmit}>Register</button>
            </form> 
        );

    }

    renderSuccessModal() {
        return (
            <div  className="w3-modal"  style = {{display : "block", marginTop: "5%"}}>
            <div className="w3-modal-content">
              <div className="w3-container">
                <span onClick= {this.props.handleModalButtonClick} className="w3-button w3-display-topright">&times;</span>
                <div style = {{display : "flex", marginTop: "5%", marginBottom : "5%"}}>
                    <i className="fa fa-check-circle" style={{fontSize:"48px",color:"green", display: "inline-block"}}></i>
                    <p className = "register-message">Successfully Registered. Please Login To Continue</p>
                </div>
              </div>
            </div>
          </div>
        
        )
    }

    render() {
        return(
            <div>
                <img id="circle" style ={{maxHeight:"100%", maxWidth:"100%"}}src={this.props.loginActive ? loginIcon : signupIcon}/>
                <div className = "login-container">
                    {this.renderTabs()}
                    {this.props.loginActive ? this.renderLoginForm() : this.renderUserRegistrationForm()}
                    {this.props.showModal && this.renderSuccessModal()}
                </div>
            </div>
        );
    }
}