import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectsByUser } from "../Redux/ActionDetails/ProjectAction";
import ProjectCard from "./ProjectViewComponent";

const HomeContentPrivate = () => {
  const { project } = useSelector((state) => state);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const [allMyProjects, setAllMyProjects] = useState([]);

  useEffect(() => {
    dispatch(getAllProjectsByUser(userId, token));
  }, [dispatch, userId, token]);

  useEffect(() => {
    setAllMyProjects(project.projectsByUser || []);
  }, [project]);

  return (
    <>
      {allMyProjects.length ? (
        allMyProjects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))
      ) : (
        <div>No projects found.</div>
      )}
      <div>HomeContentPrivate</div>
    </>
  );
};

export default HomeContentPrivate;
