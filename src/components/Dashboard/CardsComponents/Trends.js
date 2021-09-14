import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Controls from './Controls';

const options = {
  chart: {
    type: 'spline',
    height: "200px",
    backgroundColor: "#0000"
  },
  credits: {
    enabled: false
  },
  title: {
    text: null
  },
  series: [{
    showInLegend: false,
    name: "Actual",
    data: [112, 231, 167, 320, 100],
    color: "#01906D",
  },
  {
    showInLegend: false,
    name: "Projected",
    data: [231, 167, 200, 190, 120],
    color: "#329A5C",
  }],
  yAxis: {
    title: {
        text: ''
    }
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  },
  events: {
    load() {
      setTimeout(this.reflow.bind(this), 0);
    },
  }
}

const Trends = (props) => {
  return (
    <div className="card">
      <Controls {...props}/>
      <div className="chart-container">
        <h1 className="card-title">Sales</h1>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  )
}

export default Trends
