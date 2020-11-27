import React, {useEffect} from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { AuthProvider } from './context/auth';
import './App.css';

function App() {
  useEffect(()=>{
    document.title = "App React + Node"
  },[]);

  return (
    <Router history={history}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
}

export default App;