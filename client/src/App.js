import {  Routes, Route } from 'react-router-dom';
import SignupComponent from './Components/SignupComponent';
import SigninComponent from './Components/SigninComponent';

const Home = () => <div>Home</div>;

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/login" element={<SigninComponent />} />

      </Routes>
  );
}

export default App;
