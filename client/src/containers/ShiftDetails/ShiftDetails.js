import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  textField: {
    width: '30vw',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const ShiftDetails = () => {
  const [workerId, setWorkerId] = useState(null);
  const classes = useStyles();

  const handleChange = e => {
    setWorkerId(e.target.value);
  }
  
  return (
    <TextField
      id="outlined-name"
      placeholder="Enter worker id here"
      className={classes.textField}
      value={workerId}
      onChange={handleChange}
      margin="dense"
      variant="outlined"
    />
  )
}

export default ShiftDetails;
