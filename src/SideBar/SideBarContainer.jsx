import React, {Component} from 'react';
import SideBarComponent from './SideBarComponent';
import {connect} from 'react-redux';
import {actions} from '../Ducks/View';
import MutualFundService from '../Services/MutualFundService';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.banks = [
            {
             name : "Aditya Birla",
             key : 0
            }, {
                name : "Axis Bank",
                key : 1
            }, {
                name : "HDFC Bank",
                key : 2
            }, {
                name : "ICICI Bank",
                key : 3
            }, {
                name : "Reliance",
                key : 4
            }];
    }

    async fetchAllMutualFunds() {
        let mutualFunds = [];
        let service = new MutualFundService();
        for(let i = 0; i < this.banks.length; i++) {
            mutualFunds[i] = await service.fetchMutualFundData(this.banks[i].name);
        }
        this.props.mutualFundDataFetched(mutualFunds);
    }

    componentDidMount() {
        this.fetchAllMutualFunds();
    }

    handleSideBarButtonClicked = (index) => {
        this.setState({
            activeView : index
        });
    }

    render() {
        return(
            <SideBarComponent sidebarExpanded = {this.props.sidebarExpanded} 
                              onToggleButtonClick = {this.props.toggleView} 
                              onSideBarButtonClick = {this.props.handleSideBarButtonClicked}
                              banks = {this.banks}
                              activeView = {this.props.activeMutualFundIndex}
            />
        );
    }
}

const mapStateToProps = ({toggleView})=> ({
    sidebarExpanded : toggleView.sidebarExpanded,
    activeMutualFundIndex : toggleView.activeMutualFundIndex
});

const mapDispatchToProps = (dispatch) => ({
    toggleView : () => dispatch(actions.sideBarToggled()),
    handleSideBarButtonClicked: (index) => dispatch(actions.activeMutualFundChanged(index)),
    mutualFundDataFetched :  (mutualFunds) => dispatch(actions.mutualFundDataFetched(mutualFunds))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);