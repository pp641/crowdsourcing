import {  Routes, Route } from 'react-router-dom';
import SignupComponent from './Components/SignupComponent';

const Home = () => <div>Home</div>;

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupComponent />} />
      </Routes>
  );
}

export default App;
