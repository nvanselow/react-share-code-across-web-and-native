import React, { Component } from 'react';
import HockeyTeam from './hockeyTeam';
import useHockeyTeam from './hockeyTeamHooks';

const CustomInput = () => {
  const { value, isValid, onChange } = useHockeyTeam();

  const onChangeInput = event => onChange(event.target.value);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={{ marginBottom: '12px' }}>What is your favorite hockey team?</label>
      <input style={{ fontSize: '24px', padding: '5px', color: isValid ? 'green' : 'red', borderColor: isValid ? 'green' : 'red' }} value={value} onChange={onChangeInput} />
    </div>
  );
}

export default HockeyTeam(CustomInput);