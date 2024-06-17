import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProject } from '../Redux/ActionDetails/ProjectAction';
import { useParams } from 'react-router-dom';

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

const ProjectDetailViewComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const token = localStorage.getItem('token');
  const project = useSelector((state) => state.project.project); // Adjusted to directly access project.project
  const [projectDetail, setProjectDetail] = useState({});

  useEffect(() => {
    if (projectId && token) {
      dispatch(getSingleProject(projectId, token));
    }
  }, [dispatch, projectId, token]);

  useEffect(() => {
    setProjectDetail(project);
  }, [project]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="div">
          {projectDetail?.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Created by: {projectDetail?.creator}
        </Typography>
        <Typography variant="body2" component="p">
          {projectDetail?.description}
        </Typography>
        <Typography variant="body2" component="p">
          Fundings: ${projectDetail?.fundings}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailViewComponent;
