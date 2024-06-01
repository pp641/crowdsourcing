import React from "react";
import ProjectAdditionComponent from "./ProjectAdditionComponent";

const PublicComponent = () => {
  return <div>PublicComponent</div>;
};

const ProjectComponentVisibility = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  return token ? <ProjectAdditionComponent /> : <PublicComponent />;
};

export default ProjectComponentVisibility;
