import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import UserList from "./components/userList/UserList";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header"
import { useSelector, useDispatch } from 'react-redux';
import {checkUser} from './redux/actions/authActions'
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch])
  const {isAuthenticated} = useSelector((state) => state.auth);
  return (
    <Router>
      <Header/>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        
        <Route path='/' element={<Home/>}/>
        <Route path="/users" element={isAuthenticated ? <UserList/>:<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
