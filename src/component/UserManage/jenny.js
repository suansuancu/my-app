/**
 * Created by dell on 2017/8/29.
 */

import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class Jenny extends React.Component {
	componentDidMount() {

		var myChart = echarts.init(document.getElementById('graph-bar'));

		myChart.setOption({
			title: { text: 'ECharts 入门示例' },
			tooltip: {},
			xAxis: {
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
			},
			yAxis: {},
			series: [{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}]
		});
	}

	render(){

		return (
			<div id="graph-bar" style={{ width: 400, height: 400 }}></div>
		)
	}
}