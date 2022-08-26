import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

export default () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            index
            element={<Homepage />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </Router>
    </>
  );
};
