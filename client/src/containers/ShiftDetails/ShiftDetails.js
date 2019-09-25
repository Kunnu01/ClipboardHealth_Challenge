import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core'
import { 
  getTotalAmountToBePaidToWorker, 
  getTotalOvertimeAmountToBePaidToWorker 
} from './utils/wokerDetails';

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
  text: {
    marginTop: theme.spacing(3),
  },
}));

const ShiftDetails = () => {
  const [workerId, setWorkerId] = useState(null);
  const [message, setMessage] = useState('Please click on above buttons to get details');
  
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
        onClick={() => getTotalAmountToBePaidToWorker(workerId, setMessage)}
      >
        Total amount to be paid to this worker
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
        onClick={() => getTotalOvertimeAmountToBePaidToWorker(workerId, setMessage)}
      >
        Overtime amount to be paid to this worker
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Total amount to be paid (all workers)
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Total overtime amount to be paid (all workers)
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Total workers worked less than 8 hrs
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Total workers worked more than 8 hrs
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Total workers worked exactly for 8 hrs
      </Button>

      <Typography variant="h5" className={classes.text}>
        {message}
      </Typography>
    </>
  )
}

export default ShiftDetails;
