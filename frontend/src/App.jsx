import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, HomePage, LoginPage, Register, Signout, Dashboard } from './components';
import styles from './style';

const App = () => {
  const location = useLocation();

  // Determine if the current route is a dashboard route
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <div className="app">
      {/* Render Navbar only if the current route is not a dashboard route */}
      {!isDashboardRoute && (
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ll" element={<Signout />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
