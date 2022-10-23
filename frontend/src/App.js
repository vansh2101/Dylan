import { Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About'
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <About/>
    </div>
  );
}

export default App;
