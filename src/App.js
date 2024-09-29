import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import RegistrationPage from './Componets/RegistrationPage';
import LoginPage from './Componets/LoginPage';

function App() {
  var a="jdfbjfdb"
  return (
    <div className="App">
        This is main Page
        <FirstComponent />
        <RegistrationPage />
        {/* <LoginPage /> */}
    </div>
  );
}

export default App;
