import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';
import '@zensorsblueprint/core/lib/css/blueprint.css'


//children is whatever 
console.log(this.props)
const TextArea = (props) => <textarea class={props.class} type="text"></textarea>



/*
string number boolean function object shape oneOf instanceOf array
arrayOf node element any required
*/
//InputField.displayName = 'Text Input';

TextArea.propTypes = {
  //Proptypes is typescript functionality, ensures that the defined props have certain type
  labelText: PropTypes.string,
  class: PropTypes.string,
  placeholder: PropTypes.string
  //Change labelType to import 
}; 

export default TextArea;