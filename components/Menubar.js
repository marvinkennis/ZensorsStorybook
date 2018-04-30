import PropTypes from 'prop-types';
import React, {Component} from 'react';
import glamorous from 'glamorous';
import '../@zensorsblueprint/core/lib/css/blueprint.css'
import '../css/componentStyling.css'


export default class MenuBar extends Component {

  constructor(props) {
    super(props);
    this._clickHandler = this._clickHandler.bind(this);
    this._searchChangeHandler = this._searchChangeHandler.bind(this);
  }

  _clickHandler(item) {
    const {items} = this.state;
    item.disabled = !item.disabled;
    this.setState({items});
  }

  _searchChangeHandler(searchText) {
    this.setState({searchText});
  }

  render() {
    return (
      <div id="zs-menubar">
        <h1>Zensors</h1>
        <ul class="zs-menu-list">
          <li class="zs-menu-item">One</li>
          <li class="zs-menu-item">Two</li>
          <li class="zs-menu-item">Three</li>
        </ul>
      </div> 
    );
  }
}
