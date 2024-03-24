// App.js
import Login from '../src/components/Login.js';
import { Routes, Route} from 'react-router-dom'
import Signup from './components/Signup.js';
import Home from './components/Home.js';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login  />} />
      <Route path='/signup' element={<Signup />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  );
}

export default App;
