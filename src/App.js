import React from 'react'
import './App.css';
import { Route , BrowserRouter as Router , Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SocietesPage from './pages/SocietesPage';

const App = () => {
  return (
    <div className="app">
     <Router>
       <Switch>
         <Route exact path='/'>
           <LoginPage />
         </Route>
         <Route exact path='/home'>
           <SocietesPage />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
