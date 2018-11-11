import React, {Component} from 'react';
import Gauge from 'react-svg-gauge';
import {connect} from 'react-redux';
import {actions} from '../Ducks/View';
import './style.css';

class MutualFund extends Component {

    renderStarRating() {
        return(
            <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
            </div>
        );
    }

    renderTable(mutualFund) {
        return (
            <table className="w3-table w3-bordered detail-table">
                 <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{mutualFund.email}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{mutualFund.website}</td>
                    </tr>
                    <tr>
                        <td>Launch Date</td>
                        <td>{mutualFund.launchDate}</td>
                    </tr>
                </tbody>
            </table>
        );}

    renderNavDetails(mutualFund) {
        return(
            <div className = "mutual-fund-summary">            
                <div className="w3-panel  custom-panel">
                    <p className="panel-text">{`NAV : ${mutualFund.currentNav}`}</p>
                    <i className="fa fa-arrow-circle-up	icons"></i>
                </div> 
                <div className= "yyy">
                  <Gauge value={mutualFund.ourScore} width={350}label="" color = "green" />
                </div>
            </div>
        );
    }

    renderMutualFundDescription(mutualFund) {
        return(
            <div className = "list-group-item">
                <div className="item">
                    <p className="description">Total Asset</p>
                    <p className="value">{`${mutualFund.asset} cr`}</p>
                </div>
                <div className="item">
                <p className="description">Fund Class</p>
                    <p className="value">{mutualFund.fundClass}</p>
                </div>
                <div className="item">
                    <p className="description">Benchmark Rating</p>
                    <span className="value">{this.renderStarRating(mutualFund.rating)}</span>
                </div>
                <div className="item">
                <p className="description">Annualized Return</p>
                    <p className="value">{mutualFund.monthlyReturn}%</p>
                </div>
                <div className="item">
                <p className="description">Our classification</p>
                    {mutualFund.recommendation === "1" && <i className="fa fa-thumbs-up" style={{fontSize:"38px",color:"green"}}></i>}
                    {mutualFund.recommendation === "0" && <i className="fa fa-thumbs-down" style={{fontSize:"38px",color:"red"}}></i>}
                </div>
            </div>
        );
    }


    renderMutualFundSummary(mutualFund) {
        return(
                <div >
                    <div style = {{display:"flex"}}>
                        <h2 className = "header">{mutualFund.fundName}</h2>
                        <button className="forecast-button" onClick = {this.props.navHistoryClick}>NAV history</button>
                        <button className = "back-button" onClick = {this.props.handleButtonClick}>Back</button>
                    </div>
                    {this.renderMutualFundDescription(mutualFund)}
                    {this.renderNavDetails(mutualFund)}
                    {this.renderTable(mutualFund)}
                </div>
          );
      }

    render() {
        let fundDetails = this.props.mutualFunds[this.props.activeMutualFundIndex][this.props.mutualFundSumaryIndex];
        return (
            this.renderMutualFundSummary(fundDetails)
        )
    }
}

const mapStateToProps = ({toggleView})=> ({
    mutualFundSumaryIndex: toggleView.mutualFundSumaryIndex,
    activeMutualFundIndex: toggleView.activeMutualFundIndex,
    mutualFunds: toggleView.mutualFunds
});

const mapDispatchToProps = (dispatch) => ({
    handleButtonClick :  () => dispatch(actions.backButtonClickedFromSummary()),
    navHistoryClick : () => dispatch(actions.navHistoryViewSelected()),

});

export default connect(mapStateToProps, mapDispatchToProps)(MutualFund);