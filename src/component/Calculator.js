import React from 'react';
import SpeedInput from './SpeedInput';
import SpeedMonitor from './SpeedMonitor';

function tryConvert(speed, convert) {
  const input = parseFloat(speed);

  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}



function toKmph(miph) {
  return (miph / 0.6213);
}

function toMiph(kmph) {
  return (kmph * 0.6213);
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleKmphChange = this.handleKmphChange.bind(this);
    this.handleMiphChange = this.handleMiphChange.bind(this);
    this.state = { speed: '', scale: 'km' };
  }

  handleKmphChange(speed) {
    this.setState({ scale: 'km', speed });
  }

  handleMiphChange(speed) {
    this.setState({ scale: 'mi', speed });
  }

  render() {
    const scale = this.state.scale;
    const speed = this.state.speed;
    const kmph = scale === 'mi' ? tryConvert(speed, toKmph) : speed;
    const miph = scale === 'km' ? tryConvert(speed, toMiph) : speed;

    return (
      <div>
        <SpeedInput
          scale="km"
          speed={kmph}
          onSpeedChange={this.handleKmphChange} />
        <SpeedInput
          scale="mi"
          speed={miph}
          onSpeedChange={this.handleKmphChange} />
        <SpeedMonitor
          kmph={parseFloat(kmph)} />
      </div>
    );
  }
}
export default Calculator;