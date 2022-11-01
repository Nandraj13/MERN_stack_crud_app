import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import Navbar from './components/Navbar';
import Usermanager from './components/Usermanager';
import Allusers from './components/Allusers';
import Edituser from './components/Edituser';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
     <Navbar/>
     <Routes>
          <Route path='/adduser' element={<Adduser/>}/>
          <Route path='/' element={<Usermanager/>}/>
          <Route path='/alluser' element={<Allusers/>}/>
          <Route path='/updateuser' element={<Edituser/>}/>

     </Routes>
   </BrowserRouter>
  );
}

export default App;
