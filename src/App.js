import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/Register'
import Discover from './pages/Discover';
import Header from './components/Header';
import Myrecipe from './pages/Myrecipe';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
      <Router>
          <Header />
          <div className='container'>
          <Routes>
            <Route path='/recipe/:id' element={<Recipe />} /> 
            <Route path='/' element={<Discover />} />
            <Route  path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/myrecipe' element={<Myrecipe />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
