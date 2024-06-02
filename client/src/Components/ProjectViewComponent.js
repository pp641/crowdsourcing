import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const ProjectCard = ( {project}  ) => {
  const classes = useStyles();
    console.log("oktest", project)
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
        <Button size="small">Open for Funding</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
