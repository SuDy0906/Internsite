import { Navigate, Routes, Route} from 'react-router-dom';
import { Navbar, HomePage, LoginPage, Register, Signout } from './components';
import styles from './style';

const App = () => (
  <div className="app">

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}` }>
        <Navbar />
      </div>
    </div>
    <Routes>
    
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/register' element={<Register/>}></Route> 
              <Route path='/ll' element={<Signout/>}></Route> 
              
            </Routes>
    
    </div>
);

export default App;
