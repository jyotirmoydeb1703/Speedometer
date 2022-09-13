import React from "react";
const scaleNames = {
  km: 'km per hour ',
  mi: 'mi per hour.'
};

class SpeedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { speed: '' };
  }

  handleChange(e) {
    this.setState({ speed: e.target.value });
  }

  render() {
    const speed = this.state.speed;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter speed in {scaleNames[scale]}:</legend>
        <input value={speed}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export default SpeedInput;