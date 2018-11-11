import React, { Component } from 'react';
import SideBar from './SideBar/SideBarContainer';
import Dashboard from './Dashboard/DashboardContainer';
import MutualFund from './MutualFundSummary/MutualFundContainer';
import UserFund from './UserProfile/UserFunds/UserFundContainer';
import TimeSeries from './Charts/TimeSeries/TimeSeriesComponent';
import LoginForm from './LoginForm/LoginFormContainer';
import {connect} from 'react-redux';
import { actions } from './Ducks/View';
import './style.css';

class App extends Component {

  renderMutualFunds() {
    return(
      <div>
      <SideBar />
      <Dashboard user = {this.props.user}/>
    </div>
  );
  }

  renderNavHistory() {
    return (
      <div>
        <TimeSeries activeMutualFundIndex = {this.props.activeMutualFundIndex} mutualFundSumaryIndex = {this.props.mutualFundSumaryIndex}/>
        <button className = "forecast-nav-button" onClick = {this.props.backButtonClicked}>Back to Summary </button>
      </div>
    );
  }

  render() {
      if(this.props.showNavHistoryView) return this.renderNavHistory()
      if(this.props.showUserFunds) return <UserFund/>;
      if(this.props.showLoginView) return(<LoginForm/>)
      if(this.props.showAllMutualFunds) return(this.renderMutualFunds());
      if(this.props.showMutualFundSummary)return (<MutualFund/>);
  }
}

const mapStateToProps = ({toggleView})=> ({
  showLoginView : toggleView.showLoginView,
  showAllMutualFunds: toggleView.showAllMutualFunds,
  showMutualFundSummary: toggleView.showMutualFundSummary,
  user : toggleView.user,
  showUserFunds: toggleView.showUserFunds,
  showNavHistoryView: toggleView.showNavHistoryView,
  activeMutualFundIndex: toggleView.activeMutualFundIndex,
  mutualFundSumaryIndex : toggleView.mutualFundSumaryIndex
});

const mapDispatchToProps = (dispatch) => ({
  backButtonClicked: () => dispatch(actions.summaryFromNavHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


//  backButtonClicked: actions.showMutualFundSummary(toggleViewmutualFundSumaryIndex)



