import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Groovy from "./pages/Groovy";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import firebase from 'firebase/compat/app'

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAdyfmajTg0IHnIXHuRvgu5KcAJLgLq-1I",
    authDomain: "dylan-2e382.firebaseapp.com",
    projectId: "dylan-2e382",
    storageBucket: "dylan-2e382.appspot.com",
    messagingSenderId: "983258437927",
    appId: "1:983258437927:web:b16d06b452747a91597102"
  };

  firebase.initializeApp(firebaseConfig);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/groovy" element={<Groovy />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
