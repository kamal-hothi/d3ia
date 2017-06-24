import React, { Component } from 'react';
import './App.css';
import { scaleLinear } from 'd3-scale';
import { min, max } from 'd3-array';
import { select } from 'd3-selection';

class ScatterPlot extends Component{
  constructor(props){
    super(props)
    this.createScatterPlot = this.createScatterPlot.bind(this)
  }
  componentDidMount(){
    this.createScatterPlot()
  }
  componentDidUpdate(){
    this.createScatterPlot()
  }

  createScatterPlot(){
    const node = this.node
    const dataMaxX = max(this.props.data, (d) => d.x)
    const dataMinX = min(this.props.data, (d) => d.x)
    const dataMaxY = max(this.props.data, (d) => d.y)

    const xScale = scaleLinear().domain([dataMinX, dataMaxX]).range([0,this.props.size[0]])
    const yScale = scaleLinear().domain([0, dataMaxY]).range([this.props.size[1],0])

    select(node)
      .selectAll('circle')
      .data(this.props.data)
      .enter()
      .append('circle')

    select(node)
      .selectAll('circle')
      .data(this.props.data)
      .attr("r", 15)
      .attr("cx",(d) => xScale(d.x))
      .attr("cy",(d) => yScale(d.y))
      .style("fill", "orange")
      .attr("opacity",0.6)
      
  }

  render(){
    return <svg ref={node => this.node = node} width={500} height={500}> </svg>
  }
}

export default ScatterPlot;
