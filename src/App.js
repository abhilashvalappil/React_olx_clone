import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import { AuthContext, FirebaseContext } from './store/Context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
const {setUser} = useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)
  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) =>{
      setUser(user)
    })
  })

  return (
    <div>
      <Router>
        <Routes>  {/* Wrap your Routes here */}
          <Route path="/" element={<Home />} />  {/* Use element instead of children */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
