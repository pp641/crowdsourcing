import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Elevation from "./ComponentViewPaper";
import "../Styles/profile_styles.css"

const UserProfile = () => {

  const dispatch  = useDispatch();
  const token = localStorage.getItem("token");
  const {auth} = useSelector(state   => state);
  const {projects} = useSelector(state => state);


  const { userId } = useParams();

  return (
    <div>
      <div> My Project Statuses</div>
      <div className='elevation_view'>
        <Elevation title={'Total Projects'} number={0} color={'magenta'} />
        <Elevation title={'Active Projects'} number={0} color={'crimson'} />
        <Elevation title={'Archived Projects'} number={10} color={'orange'} />
        <Elevation title={'Open For Funding'} number={0} color={'lightblue'} />
      </div>
      <div>My Investment Statuses</div>
      <div className='elevation_view'>
        <Elevation title={'Completed Investments'} number={0} color={'magenta'} />
        <Elevation title={'Active Investments'} number={0} color={'crimson'} />
        <Elevation title={'Pending Investments'} number={0} color={'crimson'} />
      </div>
      <div>UserProfile : {userId}</div>
    </div>
  );
};

export default UserProfile;
