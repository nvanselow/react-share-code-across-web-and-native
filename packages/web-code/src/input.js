import React, { Component } from 'react';

class CustomInput extends Component {

  state = { value: '' };

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state;
    const isValid = value.toLowerCase() === 'bruins';

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '12px' }}>What is your favorite hockey team?</label>
        <input style={{ fontSize: '24px', padding: '5px', color: isValid ? 'green' : 'red', borderColor: isValid ? 'green' : 'red' }} value={value} onChange={this.onChange} />
      </div>
    );
  }
}

export default CustomInput;