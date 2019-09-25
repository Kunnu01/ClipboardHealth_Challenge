import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core'
import { 
  getTotalAmountToBePaidToWorker, 
  getTotalOvertimeAmountToBePaidToWorker 
} from './utils/workerDetails';

import {
  getTotalAmountToBePaid,
  getTotalWorkersEqual8Hrs,
  getTotalWorkersLessThan8Hrs,
  getTotalWorkersMoreThan8Hrs,
  getTotalOvertimeAmountToBePaid,
} from './utils/allShifts';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '30vw',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    }
  },
  button: {
    width: '30vw',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
      marginTop: theme.spacing(1),
    }
  },
  text: {
    marginTop: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(2),
    width: '80vw',
    color: '#a9a9a9',
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

      <hr className={classes.divider}/>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
        onClick={() => getTotalAmountToBePaid(setMessage)}
      >
        Total amount to be paid (all workers)
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
        onClick={() => getTotalOvertimeAmountToBePaid(setMessage)}
      >
        Total overtime amount to be paid (all workers)
      </Button>

      <hr className={classes.divider}/>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
        onClick={() => getTotalWorkersLessThan8Hrs(setMessage)}
      >
        Total workers worked less than 8 hrs
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
        onClick={() => getTotalWorkersMoreThan8Hrs(setMessage)}
      >
        Total workers worked more than 8 hrs
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        variant="outlined"
        onClick={() => getTotalWorkersEqual8Hrs(setMessage)}
      >
        Total workers worked exactly for 8 hrs
      </Button>

      <hr className={classes.divider}/>

      <Typography variant="h5" className={classes.text}>
        {message}
      </Typography>
    </>
  )
}

export default ShiftDetails;
