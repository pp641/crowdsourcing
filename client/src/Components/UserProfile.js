import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Elevation from "./ComponentViewPaper";

const UserProfile = () => {

  const dispatch  = useDispatch();
  const token = localStorage.getItem("token");
  const {auth} = useSelector(state   => state);
  const {projects} = useSelector(state => state);


  const { userId } = useParams();

  return (
    <div>
      <Elevation/>
      <div>UserProfile : {userId}</div>

    </div>
  );
};

export default UserProfile;
