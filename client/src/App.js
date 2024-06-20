import {  Routes, Route } from 'react-router-dom';
import SignupComponent from './Components/SignupComponent';
import SigninComponent from './Components/SigninComponent';
import HomeComponent from './Components/HomeComponent';
import ProjectComponentVisibility from './Components/ProjectComponentVisibility';
import UserProfile from './Components/UserProfile';
import ProjectDetailViewComponent from './Components/ProjectDetailedViewComponent';
import NavbarContainer from './Components/NavbarContainer';
import Chat from './Components/ChatComponent'
import Developers from './Components/Developers'


function App() {
  return (
    <>
      <NavbarContainer/>
      <Chat/>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/login" element={<SigninComponent />} />
        <Route path="/project/create"  element={<ProjectComponentVisibility />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path = "/project/:projectId" element={<ProjectDetailViewComponent/>} />
        <Route path = "/developers" element={<Developers/>} />
      </Routes>
      </>
  );
}

export default App;
