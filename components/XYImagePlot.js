import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';
import {curveCatmullRom} from 'd3-shape';
import '../node_modules/react-vis/dist/style.css';
import '../@zensorsblueprint/core/lib/css/blueprint.css'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  MarkSeries
}  from 'react-vis';


//children is whatever 
console.log(this.props)
const XYImagePlot = (props) => {
  //daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return(  
  <div>
  <XYPlot
    width={600}
    height={300}>
    <MarkSeries
      className="mark-series-example"
      strokeWidth={2}
      opacity="0.8"
      sizeRange={[5, 15]}
      data={[
        {x: 1, y: 10, size: 30},
        {x: 1.7, y: 12, size: 10},
        {x: 2, y: 5, size: 1},
        {x: 3, y: 15, size: 12},
        {x: 2.5, y: 7, size: 4}
      ]}/>
  </XYPlot>
  <img src=""/>
  </div>)
}



/*
string number boolean function object shape oneOf instanceOf array
arrayOf node element any required
*/
//InputField.displayName = 'Text Input';

XYImagePlot.propTypes = {
  //Proptypes is typescript functionality, ensures that the defined props have certain type
  labelText: PropTypes.string,
  class: PropTypes.string,
  placeholder: PropTypes.string
  //Change labelType to import 
}; 

export default XYImagePlot