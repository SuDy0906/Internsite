import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
const App = () => (
  <div className="app">
    <BrowserRouter>
    <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/login' element={<LoginPage/>}></Route>
              
            </Routes>
    </BrowserRouter>
    </div>
);

export default App;
