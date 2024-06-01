import {  Routes, Route } from 'react-router-dom';
import SignupComponent from './Components/SignupComponent';
import SigninComponent from './Components/SigninComponent';
import HomeComponent from './Components/HomeComponent';
import ProjectComponentVisibility from './Components/ProjectComponentVisibility';


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/login" element={<SigninComponent />} />
        <Route path="/project" element={<ProjectComponentVisibility />} />
      </Routes>
  );
}

export default App;
