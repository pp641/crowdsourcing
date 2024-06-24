import React  from 'react';
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 2,
    marginLeft: -10,
  },
}));



const MyButtonGroup = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Button variant="contained" onClick = {()=> navigate("/project/create")}  color="primary" aria-label="outlined primary button group" >Create New Project</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </div>
  );
};

export default MyButtonGroup;
