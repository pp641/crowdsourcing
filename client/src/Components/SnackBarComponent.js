import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { showSuccessMessage, closeSnackbar } from '../Redux/ActionDetails/AlertAction';
import { openSnackbar } from '../Redux/ActionDetails/AlertAction';

export default function CustomizedSnackbars() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.alert);

  const handleClick = () => {
    dispatch(showSuccessMessage('This is a success alert inside a Snackbar!'));
    dispatch(openSnackbar());
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackbar());
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
