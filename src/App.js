import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home/Home';
import Header from './Page/Share/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes >
    </div >
  );
}

export default App;
