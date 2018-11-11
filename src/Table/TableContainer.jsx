import React, {Component} from 'react';
import TableComponent from './TableComponent';

export default class Table extends Component {
    render() {
        return(
            <TableComponent mutualFunds = {this.props.mutualFunds} onClick = {(key) => this.props.handleMutualFundClick(key)}/>
        );
    }


}

