import React, {Component} from 'react';
import './style.css';
import '../common.css';

export default class SideBarComponent extends Component {

    renderSideBarIcons(banks) {
        return banks.map(bank =>{
            return  <li key = {bank.key} onClick = {() => this.props.onSideBarButtonClick(bank.key)} className={ this.props.activeView !== bank.key ? "sidebar-menu-item" : "sidebar-menu-item active-tem"  }>{bank.name}</li>
        });
    }

    render() {
        const className = this.props.sidebarExpanded ? "w3-sidebar w3-bar-block w3-card sidebar-active" : "w3-sidebar w3-bar-block w3-card  sidebar-collapsed";

            return(
                <div className={className} id="mySidebar">
                    <h2 style = {{marginLeft : "5%", marginTop:"30px" }}>Dashboard</h2>

                    <nav className="xxx">
                        <ul>
                            {this.renderSideBarIcons(this.props.banks)}
                        </ul>
                    </nav>
                </div>
            );
    }
}