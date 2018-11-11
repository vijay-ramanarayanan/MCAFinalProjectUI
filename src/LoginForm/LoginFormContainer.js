import React, {Component} from 'react';
import LoginFormComponent from './LoginFormComponent';
import './style.css';
import UserService from '../Services/UserDirectoryService';
import {connect} from 'react-redux';
import {actions} from '../Ducks/View'


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginActive : true,
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            showModal: "",
            showErrorMessage: ""
        };

        this.userService = new UserService();
        this.message = "";
    }

    handleLoginTabClick = () => {
        this.setState ({
            loginActive : true
        });
    }

    handleSignUpTabClick = () => {
        this.setState ({
            loginActive : false
        });
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});

    }

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    }

    handleModalButtonClick = () => {
        this.setState({
            showModal : false,
            loginActive: true
        });
    }

    handleSignUpSubmit = (event) => {
        event.preventDefault();
        if(this.state.email === "" || this.state.password === "" || this.state.firstName === "" || this.state.lastName === "") {
            this.message = "Please enter a valid value for all the fields";
            this.setLoginError();
        } else {
            this.userService.register({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,    
            }).then(response =>{
                if(response.firstName) {
                    this.setState({
                        showModal : true
                    });
                }
            }).catch(() => {
                this.message = "User Already Exists!!!";
                this.setLoginError();        
            });
        }
    }

    setLoginError() {
        this.setState({
            showErrorMessage : true,
        });

    }

    handleLoginSubmit = (event) => {
        event.preventDefault();

        const user = {
            password: this.state.password,
            email : this.state.email
        }

        this.userService.login(user)
                .then(response => {
                    if(response.firstName) {
                        this.props.toggleView(response);
                    } else {
                        this.message = "Invalid UserName/Password Combination";
                        this.setLoginError();
                    }
                })
                .catch(() =>{
                    this.message = "Invalid UserName/Password Combination";
                    this.setLoginError();
                });
    }

    render() {
        const props = {
            loginActive : this.state.loginActive,
            email : this.state.email,
            password : this.state.password,
            onLoginTabClick : this.handleLoginTabClick,
            onSignUpTabClick : this.handleSignUpTabClick,
            handleEmailChange : this.handleEmailChange,
            handlePasswordChange : this.handlePasswordChange,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            handleFirstNameChange : this.handleFirstNameChange,
            handleLastNameChange : this.handleLastNameChange,
            handleSignUpSubmit : this.handleSignUpSubmit,
            handleModalButtonClick: this.handleModalButtonClick,
            showModal : this.state.showModal,
            showErrorMessage : this.state.showErrorMessage,
            handleLoginSubmit : this.handleLoginSubmit,
            message : this.message
        }

        return(
            <div>
            <LoginFormComponent {... props}/>
            </div>
        );
    }
}

const mapStateToProps = ({toggleView})=> ({
    showLoginView : toggleView.showLoginView,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    toggleView : (user) => dispatch(actions.loginSuccess(user))

  });
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
  
  
  