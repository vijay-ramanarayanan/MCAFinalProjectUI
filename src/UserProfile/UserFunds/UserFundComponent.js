import React, {Component} from 'react';
import './style.css';

export default class UserFundComponent extends Component {

    renderUserFund(fund) {
        return <li key = {fund.fundName} className="user-mutual-fund ">
                    <p className=" fund-name fund-description">{fund.fundName}</p>
                    <p className=" fund-description">{`Invested Amount : ${fund.amountInvested}`}</p>
                </li>
    }

    render() {
        return(

            <div>
                <ul className="user-invested-funds">
                {this.props.mutualFunds.map(mutualFund =>{
                    return this.renderUserFund(mutualFund)
                })}
                </ul>
            </div>
        )
    }
}