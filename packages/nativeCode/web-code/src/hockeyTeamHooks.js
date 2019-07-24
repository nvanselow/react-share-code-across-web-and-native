import React, { useState } from 'react';

const useHockeyTeam = () => {
  const [value, onChange] = useState('');

  const isValid = value.toLowerCase() === 'bruins';

  return {
    value,
    onChange,
    isValid
  }
}

export default useHockeyTeam;