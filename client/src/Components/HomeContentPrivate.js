import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, getAllProjectsByUser } from "../Redux/ActionDetails/ProjectAction";
import ProjectCard from "./ProjectViewComponent";

const HomeContentPrivate = () => {
  const { project } = useSelector((state) => state);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const [allMyProjects, setAllMyProjects] = useState([]);

  useEffect(() => {
    dispatch(getAllProjects(token));
  }, [dispatch,  token]);

  useEffect(() => {
    setAllMyProjects(project.projects || []);
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
