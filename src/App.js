import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import Header from './Page/Share/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes >
    </div >
  );
}

export default App;
