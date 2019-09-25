import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  textField: {
    width: '30vw',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    width: '30vw',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    }
  },
}));

const ShiftDetails = () => {
  const [workerId, setWorkerId] = useState(null);
  const classes = useStyles();

  const handleChange = e => {
    setWorkerId(e.target.value);
  }
  
  return (
    <>
      <TextField
        id="outlined-name"
        placeholder="Enter worker id here"
        className={classes.textField}
        value={workerId}
        onChange={handleChange}
        margin="dense"
        variant="outlined"
      />

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Total amount to be paid
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Total overtime amount to be paid
      </Button>
    </>
  )
}

export default ShiftDetails;
