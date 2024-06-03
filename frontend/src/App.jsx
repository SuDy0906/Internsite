import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, HomePage, LoginPage, Register, Signout, Dashboard } from './components';
import styles from './style';
import UserDash from './components/UserDash';

const App = () => {
  const location = useLocation();

  // Determine if the current route is the dashboard
  const isDashboardRoute = location.pathname === '/userdash';

  return (
    <div className="app">
      {/* Render Navbar only if the current route is not the dashboard */}
      {!isDashboardRoute && (
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      )}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ll' element={<Signout />} />
        <Route path='/userdash' element={<Dashboard />} />
      
      </Routes>
    </div>
  );
};

export default App;
