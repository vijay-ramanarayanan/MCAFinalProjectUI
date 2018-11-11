import React, {Component} from 'react';
import UserFundComponent from './UserFundComponent';
import './style.css';
import PieChart from '../../Charts/PieChart/PiechartContainer';
import EditFundModal from '../../Modal/EditFundModalContainer';
import {connect} from 'react-redux';
import {actions} from '../../Ducks/View';
import UserService from '../../Services/UserDirectoryService';



class UserFund extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isLoading: true,
        };

        this.mutualFunds = [];
        this.userService = null;
    }

    componentDidMount() {
        this.userService = new UserService();
        this.fetchUserFunds();
    }

    showModal = () => {
        this.setState({
            showModal: true
        });
    }

    handleModalClose = () => {
        this.setState({
            showModal: false
        });

    }

    fetchUserFunds = async () => {
         this.userService.fetchUserFunds(this.props.user.email).then((mutualFunds) =>{
            this.totalAmount = 0;
            this.mutualFunds = mutualFunds.map(mutualFund => {
                this.totalAmount += Number(mutualFund.amountInvested);
                return {
                    fundName : mutualFund.fundName,
                    amountInvested : mutualFund.amountInvested,
                }
            });

            this.setState({
                isLoading: false
            });
        });
    }

    renderData() {
        return(
            <div style ={{backgroundColor: "rgb(248, 248, 248)"}}>
            {this.state.showModal && <EditFundModal showModal = {this.state.showModal} onClose = {this.handleModalClose} fetchUserData = {this.fetchUserFunds} user = {this.props.user}/>}

            <div style = {{display : "flex"}}>
                <p style ={{marginLeft : "10%"}}><b>Invested Mutual Funds Summary</b></p>
                <button className = "user-mutual-fund-summary-button" onClick = {this.showModal} >Click Here To Add</button>
                <button className = "user-mutual-fund-summary-button" onClick = {this.props.displayMutualFundSummary}> Go Back </button>

            </div>
            <div className = "user-fund-container">
            <div className = "user-fund-summary">
                <p> {`User Email : ${this.props.user.email}`}</p>
                <p> {`Display Name : ${this.props.user.firstName}  ${this.props.user.lastName}`}</p>
                <p> {`No of Funds Invested : ${this.mutualFunds.length}`}</p>
                <p> {`Total Amount Invested : ${this.totalAmount}`}</p>
            </div>
            <PieChart mutualFunds = {this.mutualFunds}
                      totalAmount = {this.totalAmount}
            
            />

            </div>
            <hr/>
            <UserFundComponent mutualFunds = {this.mutualFunds}/>

            </div>
        );
    }

    renderisLoading() {
        return <h1>Loading ....</h1>
    }

    render() {
        return this.state.isLoading ? this.renderisLoading() :  this.renderData();
    }
}

const mapStateToProps = ({toggleView})=> ({
    user: toggleView.user
});

const mapDispatchToProps = (dispatch) => ({
    displaySelectedFund :  (index) => dispatch(actions.showMutualFundSummary(index)),
    displayMutualFundSummary: () =>  dispatch(actions.backButtonClickedFromSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFund);