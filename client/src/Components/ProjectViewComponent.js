import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  const openProjectView = () => {
    navigate(`/project/${project._id}`)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Created by: {project.creator}
        </Typography>
        <Typography variant="body2" component="p">
          {project.description}
        </Typography>
        <Typography variant="body2" component="p">
          Fundings: ${project?.fundings}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick={openProjectView}  size="mid" color='warning' variant='contained'>View Project</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
