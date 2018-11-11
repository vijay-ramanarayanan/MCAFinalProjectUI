import React, {Component} from 'react';
import './style.css';

export default class EditFundModalComponent extends Component {
    
    renderMutualFundOptions() {
        return (
          <select className = "mutual-fund-selector" onChange = {this.props.handleFundNameChange}>
            <option value="Axis Arbitrage Fund">Axis Arbitrage Fund</option>
            <option value="Axis Banking & PSU Debt Fund - Direct Plan">Axis Banking & PSU Debt Fund - Direct Plan</option>
            <option value="Axis Bluechip Fund">Axis Bluechip Fund</option>
            <option value="Axis Corporate Debt Fund">Axis Corporate Debt Fund</option>
            <option value="Axis Dynamic Bond Fund">Axis Dynamic Bond Fund</option>

            <option value="Aditya Birla Sun Life Arbitrage Fund">Aditya Birla Sun Life Arbitrage Fund</option>
            <option value="Aditya Birla Sun Life Banking and PSU Debt Fund">Aditya Birla Sun Life Banking and PSU Debt Fund</option>
            <option value="Aditya Birla Sun Life Capital Protection Oriented Fund">Aditya Birla Sun Life Capital Protection Oriented Fund</option>
            <option value="Aditya Birla Sun Life Corporate Bond Fund">Aditya Birla Sun Life Corporate Bond Fund</option>
            <option value="Aditya Birla Sun Life Pure Value Fund">Aditya Birla Sun Life Pure Value Fund</option>

            <option value="HDFC Arbitrage Fund">HDFC Arbitrage Fund</option>
            <option value="HDFC Balanced Advantage Fund">HDFC Balanced Advantage Fund</option>
            <option value="HDFC Corporate Bond Fund">HDFC Corporate Bond Fund</option>
            <option value="HDFC Dynamic Debt Fund">HDFC Dynamic Debt Fund</option>
            <option value="HDFC Equity Fund">HDFC Equity Fund</option>

            <option value="ICICI Prudential Banking and PSU Debt Fund">ICICI Prudential Banking and PSU Debt Fund</option>
            <option value="ICICI Prudential Bluechip Fund">ICICI Prudential Bluechip Fund</option>
            <option value="ICICI Prudential Bond Fund">ICICI Prudential Bond Fund</option>
            <option value="ICICI Prudential Constant Maturity Gilt Fund">ICICI Prudential Constant Maturity Gilt Fund</option>
            <option value="ICICI Prudential Focused Equity Fund">ICICI Prudential Focused Equity Fund</option>

            <option value="Reliance Arbitrage FundFund">Reliance Arbitrage Fund</option>
            <option value="Reliance Balanced Advantage Fund">Reliance Balanced Advantage Fund</option>
            <option value="Reliance Banking Fund">Reliance Banking Fund</option>
            <option value="Reliance Equity Hybrid Fund">Reliance Equity Hybrid Fund</option>
            <option value="Reliance Equity Savings Fund">Reliance Equity Savings Fund</option>

          </select>
        );
    }
  
    render() {
        const modalStyle = {
          display : this.props.showModal ? "block" : "none"
        };

        return(
          <div  className= "w3-container">
            <div  className="w3-modal" style = {modalStyle}>
            <div className="w3-modal-content">
              <div className="w3-container">
                <span onClick= {this.props.onClose} className="w3-button w3-display-topright">&times;</span>
                <p><b>Mutual Fund Name</b></p>
                {this.renderMutualFundOptions()}
                <p><b>Add Amount</b></p>
                <input className ="mutual-fund-selector" onChange = {this.props.handleAmountChange} type="text"/>
                <div>
                <button className = "submit-add-fund" onClick = {this.props.onSubmitClick}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          </div>

        );
    }
}