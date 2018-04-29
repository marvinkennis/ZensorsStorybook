import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';
import '../@blueprintjs/core/lib/css/blueprint.css'
const ReactHeatmap = require('react-heatmap');




//children is whatever 
console.log(this.props)
const Heatmap = (props) => <ReactHeatmap max={5} data={[{ x: 10, y: 15, value: 5}, { x: 50, y: 50, value: 2}]} />


Heatmap.propTypes = {
  //Proptypes is typescript functionality, ensures that the defined props have certain type
  labelText: PropTypes.string,
  //Change labelType to import 
  labelType: PropTypes.oneOf(['News', 'Photos']),
  children: PropTypes.node.isRequired,
  //Onclick should be a function
  onClick: PropTypes.func,
};

export default Heatmap;