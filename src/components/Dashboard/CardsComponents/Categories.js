import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import variablePie from "highcharts/modules/variable-pie.js";
import Controls from './Controls';
variablePie(Highcharts)

let options = {
  chart: {
    type: 'variablepie',
    margin: [0,0,0,0],
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 0,
    height: "180px",
    backgroundColor: "#0000"
  },
  credits: {
    enabled: false
  },
  title: {
      text: null
  },
  tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Total Sales: <b>{point.y}</b><br/>'
  },
  series: [{
      minPointSize: 20,
      innerSize: '50%',
      zMin: 0,
      name: 'countries',
      data: [{
          name: 'Spain',
          y: 505,
          color:"#01906D"
        }, {
          name: 'France',
          y: 551,
          color:"#329A5C"
        }, {
          name: 'Italy',
          y: 301,
          color:"#3C9E33"
        }, {
          name: 'Switzerland',
          y: 41,
          color:"#329A5C"
        }, {
          name: 'Germany',
          y: 357,
          color:"#98C700"
      }]
  }]
}

const Categories = (props) => {
  return (
    <div className="card">
      <Controls {...props}/>
      <div className="chart-container">
        <h1 className="card-title">Countries</h1>
        <HighchartsReact
          allowChartUpdate={true}
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  )
}

export default Categories
