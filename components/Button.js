import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';
import './styling/omponentStyling.sass'



//children is whatever 
console.log(this.props)
const Button = (props) => <button class={props.class}>Yooo</button>


Button.propTypes = {
  //Proptypes is typescript functionality, ensures that the defined props have certain type
  labelText: PropTypes.string,
  //Change labelType to import 
  labelType: PropTypes.oneOf(['News', 'Photos']),
  children: PropTypes.node.isRequired,
  //Onclick should be a function
  onClick: PropTypes.func,
};

export default Button;