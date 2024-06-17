import {  Routes, Route } from 'react-router-dom';
import SignupComponent from './Components/SignupComponent';
import SigninComponent from './Components/SigninComponent';
import HomeComponent from './Components/HomeComponent';
import ProjectComponentVisibility from './Components/ProjectComponentVisibility';
import UserProfile from './Components/UserProfile';
import ProjectDetailViewComponent from './Components/ProjectDetailedViewComponent';
import NavbarContainer from './Components/NavbarContainer';


function App() {
  return (
    <>
      <NavbarContainer/>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/login" element={<SigninComponent />} />
        <Route path="/project/create"  element={<ProjectComponentVisibility />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path = "/project/:projectId" element={<ProjectDetailViewComponent/>} />
      </Routes>
      </>
  );
}

export default App;
