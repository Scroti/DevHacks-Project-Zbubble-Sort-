import React from 'react';
import Chip from '@mui/material/Chip';
import { Typography } from '@mui/material';

const Abilities = ({ abilities }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Typography variant="h5">Abilities:</Typography>
      {abilities.map((ability: string, x) => (
        <Chip label={ability} key={x} variant="outlined" className="mb-2" />
      ))}
    </div>
  );
};

export default Abilities;
