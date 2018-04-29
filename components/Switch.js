import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';
import '@blueprintjs/core/lib/css/blueprint.css'


//children is whatever 
console.log(this.props)
const Toggle = (props) => <input class={props.class} type="text"></input>



/*
string number boolean function object shape oneOf instanceOf array
arrayOf node element any required
*/
//InputField.displayName = 'Text Input';

Toggle.propTypes = {
  //Proptypes is typescript functionality, ensures that the defined props have certain type
  labelText: PropTypes.string,
  class: PropTypes.string,
  placeholder: PropTypes.string
  //Change labelType to import 
}; 

export default Toggle;