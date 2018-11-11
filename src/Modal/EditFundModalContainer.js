import React, {Component} from 'react';
import EditFundModalComponent from './EditFundModalComponent';
import MutualFundService from '../Services/MutualFundService';

export default class EditFundModal extends Component {

    constructor(props) {
        super(props);
        this.fundName = "Axis Arbitrage Fund";
        this.amountInvested = "";
        this.mutualFundService = new MutualFundService()
    }

    handleAmountChange = (evt) =>{
        this.amountInvested = evt.target.value;
    }

    handleFundNameChange = (evt) =>{
        this.fundName = evt.target.value;
    }


    onSubmitClick = () => {
        if(Number(this.amountInvested)) {
            this.mutualFundService.addAmountToFund({
                fundName: this.fundName,
                email : this.props.user.email,
                amountInvested: this.amountInvested
            }).then(res =>{
                this.props.onClose();
                this.props.fetchUserData();
            });
        } else {
            alert("Please Enter a Valid amount");
        }
    }

    render() {
        return(
            <EditFundModalComponent showModal = {this.props.showModal} 
            handleFundNameChange = {this.handleFundNameChange}
            handleAmountChange = {this.handleAmountChange}
            onSubmitClick = {this.onSubmitClick}
            onClose = {this.props.onClose}/>
        )
    }
}