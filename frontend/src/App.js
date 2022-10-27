import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Groovy from "./pages/Groovy";
import Community from "./pages/Community";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/groovy" element={<Groovy />} />
          <Route path="/community" element={<Community />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
