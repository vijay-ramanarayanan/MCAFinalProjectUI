import React, {Component} from 'react';
import DashboardComponent from './DashboardComponent';
import {connect} from 'react-redux';
import ToolbarContainer from '../Toolbar/ToolbarContainer';
import {actions} from '../Ducks/View';


class Dashboard extends Component {
    render() {
        const className = this.props.sidebarExpanded ? " main-collapsed" : " main-expanded";
        return (
            <div className = {className}>
                <ToolbarContainer />
                <DashboardComponent sidebarExpanded = {this.props.sidebarExpanded} mutualFunds = {this.props.mutualFunds[this.props.activeMutualFundIndex]} onMutualFundClick = {this.props.displaySelectedFund}/>
            </div>
        );
    }
}

const mapStateToProps = ({toggleView})=> ({
    sidebarExpanded : toggleView.sidebarExpanded,
    mutualFunds : toggleView.mutualFunds,
    activeMutualFundIndex: toggleView.activeMutualFundIndex

});

const mapDispatchToProps = (dispatch) => ({
    displaySelectedFund :  (index) => dispatch(actions.showMutualFundSummary(index))

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);