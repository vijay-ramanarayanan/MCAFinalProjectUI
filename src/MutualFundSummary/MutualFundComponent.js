import React, {Component} from 'react';
import './style.css';
import {JustGage} from 'justgage';


/*export default class MutualFundComponent extends Component {
    render() {
        return(
            <div class="w3-panel w3-red">
            <p>I am a panel.</p>
          </div>
        
        )
    }
}*/


export default class Gauge extends Component {
    componentDidMount() {
  
      this.guage = new JustGage({
        id: "guage",
        value: parseInt( this.props.value ),
        min: parseInt( this.props.min ),
        max: parseInt( this.props.max ),
        title: this.props.title,
        label: this.props.label
      });
    }
  
      render() {
        return (
          <div id="guage" />
        );
      }
  }
  