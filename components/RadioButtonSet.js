import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';
import '../@zensorsblueprint/core/lib/css/blueprint.css'
import {RadioGroup, Radio} from "../@zensorsblueprint/core";


//children is whatever 
console.log(this.props)
const RadioButtonSet = (props) =>
<RadioGroup
    label="Meal Choice"
    //onChange={this.handleMealChange}
    //selectedValue={this.state.mealType}
>
    <Radio label="Soup" value="one" />
    <Radio label="Salad" value="two" />
    <Radio label="Sandwich" value="three" />
</RadioGroup>



/*
string number boolean function object shape oneOf instanceOf array
arrayOf node element any required
*/
//InputField.displayName = 'Text Input';

RadioButtonSet.propTypes = {
  //Proptypes is typescript functionality, ensures that the defined props have certain type
  labelText: PropTypes.string,
  class: PropTypes.string,
  placeholder: PropTypes.string
  //Change labelType to import 
}; 

export default RadioButtonSet;