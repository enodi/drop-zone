import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default AppRoutes;