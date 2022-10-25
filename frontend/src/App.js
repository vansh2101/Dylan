// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Register from './pages/Register';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
function App() {
  return (
    <>
      {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route index element={<Homepage />} />
        <Route path="register" element={<Register />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Route>9
    </Routes>
  </BrowserRouter> */}
  <Homepage/>
    </>
  );
}

export default App;
