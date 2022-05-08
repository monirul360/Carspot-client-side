import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './Page/Additem/Additem';
import Error from './Page/Error/Error';
import Home from './Page/Home/Home/Home';
import Inventory from './Page/Inventory/Inventory';
import Login from './Page/Login/Login';
import Private from './Page/Private/Private';
import Register from './Page/Register/Register';
import Footer from './Page/Share/Footer/Footer';
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
        <Route path='/additem' element={<Additem></Additem>}></Route>
        <Route path='/inventory/:id' element={
          <Private>
            <Inventory></Inventory>
          </Private>
        }></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes >
      <Footer></Footer>
    </div >
  );
}

export default App;
