import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import InputField from '../components/InputField';
import TextArea from '../components/TextArea';
import Dropdown from '../components/Dropdown';
import ImageCrop from '../components/ImageCrop';
import LineGraph from '../components/LineGraph';
import RadioButtonSet from '../components/RadioButtonSet';
import { ClipLoader } from 'react-spinners';
import {Switch, Callout, Checkbox} from "../@zensorsblueprint/core";

import '../@zensorsblueprint/core/lib/css/blueprint.css'
import XYImagePlot from '../components/XYImagePlot';

var divStyle = {
  color: 'white',
  backgroundColor:'red !important'
};

storiesOf('Typography', module)
  .add('Primary', () => (
    <div>
    <h1>This is blueprint suckas</h1>
    <h2>Another one</h2>
    <h3>Here's another one</h3>
    <h4>This is the last</h4>
    <p>How about a paragraph here huh? Can just keep writing a couple sentences so you can get a better idea of what this looks like for now. Didnt apply any styling yet. </p>
    </div>
  ))


storiesOf('Buttons', module)
  .add('Primary', () => (
    <Button class="pt-button" onClick={action('clicked')}>Default button</Button>
  ))

  .add('Secondary', () => (
    <Button datapoint="yada"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))

  .add('Icon and label', () => (
    <Button class="pt-button pt-icon-add" onClick={action('clicked')}><span role="img" aria-label="so cool">Button and label</span></Button>
  ))

  .add('Icon only', () => (
    <Button class="pt-button pt-icon-add" onClick={action('clicked')}></Button>
  ))

  .add('Button grouping', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))

  .add('Text link', () => (
    <a>Waddup this is s text link </a>
  ))


  storiesOf('Text Fields', module)
  .add('Primary', () => (
    <InputField class="pt-input"></InputField>
  ))

  .add('Validation', () => (
    <InputField class="pt-input pt-intent-danger"></InputField>
  ))

  .add('disabled', () => (
    <InputField class="pt-input .modifier :readonly">Hello Button</InputField>
  ))


  storiesOf('Text Areas', module)
  .add('Primary', () => (
    <TextArea class="pt-input"></TextArea>
  ))

  .add('Validation', () => (
    <TextArea class="pt-input pt-intent-danger"></TextArea>
  ))

  .add('disabled', () => (
    <TextArea class="pt-input .modifier :readonly"></TextArea>
  ))



  storiesOf('Heatmaps', module)
  .add('Primary', () => (
    <Heatmap></Heatmap>
  ))


  storiesOf('Switches, toggles, selection', module)
  .add('Radio buttons', () => (
    <RadioButtonSet></RadioButtonSet>
  ))

  .add('Switch', () => (
    <Switch checked="true" label="Public" onChange={console.log(this.handlePublicChange)} />
  ))

  .add('Dropdown', () => (
    <Dropdown></Dropdown>
  ))

  .add('Checkbox', () => (
    <div>
    <Checkbox checked="true" label="Check this"  />
    <Checkbox checked="false" label="heyooooo"  />
    </div>
  ))

  

  storiesOf('System messaging', module)
  .add('Warning', () => (
    <Callout intent="warning">Warning notification: Descriptive text goes here.</Callout>
  ))
  .add('Danger', () => (
    <Callout intent="danger">Danger notification: Descriptive text goes here.</Callout>
  ))
  .add('Info', () => (
    <Callout icon="info-sign" intent="info">Info notification: Descriptive text goes here.</Callout>
  ))
  .add('Success', () => (
    <Callout intent="success">Success notification: Descriptive text goes here.</Callout>
  ))

  storiesOf('Graphs', module)
  .add('Warning', () => (
    <Callout intent="warning">Warning notification: Descriptive text goes here.</Callout>
  ))
  .add('Danger', () => (
    <Callout intent="danger">Danger notification: Descriptive text goes here.</Callout>
  ))
  .add('Info', () => (
    <Callout icon="info-sign" intent="info">Info notification: Descriptive text goes here.</Callout>
  ))
  .add('Success', () => (
    <Callout intent="success">Success notification: Descriptive text goes here.</Callout>
  ))

  storiesOf('Indicators', module)
  .add('Loading', () => (
    <ClipLoader></ClipLoader>
  ))

  storiesOf('Charts and graphs', module)
  .add('Line chart', () => (
    <LineGraph></LineGraph>
  ))

  .add('XY Image plot', () => (
    <XYImagePlot></XYImagePlot>
  ))



  storiesOf('Region select', module)
  .add('Default', () => (
    <ImageCrop></ImageCrop>
  ))




