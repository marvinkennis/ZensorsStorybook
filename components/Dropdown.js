import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';
import '@blueprintjs/core/lib/css/blueprint.css'


//children is whatever 
console.log(this.props)
const Dropdown = (props) => 
<label class="pt-label .modifier">
  Label A
  <div class="pt-select">
    <select>
      <option selected>Choose an item...</option>
      <option value="1">One</option>
    </select>
  </div>
</label>



/*
string number boolean function object shape oneOf instanceOf array
arrayOf node element any required
*/
//InputField.displayName = 'Text Input';

Dropdown.propTypes = {
  //Proptypes is typescript functionality, ensures that the defined props have certain type
  labelText: PropTypes.string,
  class: PropTypes.string,
  placeholder: PropTypes.string
  //Change labelType to import 
}; 

export default Dropdown;