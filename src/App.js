import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import RegistrationPage from './Componets/RegistrationPage';
import LoginPage from './Componets/LoginPage';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './Componets/NavBar';
import { useEffect } from 'react';

function App() {
  var a="jdfbjfdb"
  const navigate=useNavigate();
  // useEffect(()=>{
  //   alert("hello welcome to my page")
  // },[])
  return (
    <div>
        <NavBar />
        <div className="App">
            This is main Page
            <button onClick={()=>navigate("/login")}>Login</button>
            <button onClick={()=>navigate("/register")}>Register</button>
            {/* <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link> */}
            {/* <FirstComponent />
            <RegistrationPage /> */}
            {/* <LoginPage /> */}
        </div>
    </div>
  );
}

export default App;
