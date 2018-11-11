import React, {Component} from 'react';
import './style.css';
import '../common.css';
import Table from '../Table/TableContainer';
import BarChart from '../Charts/BarChart/Barchar';
export default class DashboardComponent extends Component {
    render() {
        return (
            <div className = "dashboard">
                <Table mutualFunds = {this.props.mutualFunds} handleMutualFundClick = {(index) => this.props.onMutualFundClick(index)} />
                <BarChart mutualFunds = {this.props.mutualFunds}/>
            </div>
        );
    }
}