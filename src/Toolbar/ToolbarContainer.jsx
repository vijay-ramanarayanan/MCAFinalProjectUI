import React, {Component} from 'react';
import ToolBarComponent from './ToolbarComponent';
import {connect} from 'react-redux';
import {actions} from '../Ducks/View'

class ToolBar extends Component {
    render() {
        return(
            <ToolBarComponent onToggleButtonClick = {this.props.toggleView}
                              sidebarExpanded = {this.props.sidebarExpanded}
                              handleMyFundClick = {this.props.handleMyFundClick}
                              user = {this.props.user}
                              />
        );
    }
}

const mapStateToProps = ({toggleView})=> ({
    sidebarExpanded : toggleView.sidebarExpanded,
    user : toggleView.user
});

const mapDispatchToProps = (dispatch) => ({
    toggleView : () => dispatch(actions.sideBarToggled()),
    handleMyFundClick : () => dispatch(actions.userFundsSelected())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);