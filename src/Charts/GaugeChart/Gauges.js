import React, { Component } from 'react';
import Gauge from './Gauge.tsx';

export default class GaugeChart extends Component {
	render() {
		return (
			<div>
				<Gauge value={70} width={400} height={320} label="This is my Gauge" />
			</div>
		);
	}
}

