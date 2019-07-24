import React, { Component } from 'react';
import HockeyTeam from './hockeyTeam';

class CustomInput extends Component {

  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const { value } = this.props;
    const isValid = value.toLowerCase() === 'bruins';

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '12px' }}>What is your favorite hockey team?</label>
        <input style={{ fontSize: '24px', padding: '5px', color: isValid ? 'green' : 'red', borderColor: isValid ? 'green' : 'red' }} value={value} onChange={this.onChange} />
      </div>
    );
  }
}

export default HockeyTeam(CustomInput);