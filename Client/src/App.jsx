import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedNav from './components/navBar/Oulet';
import Acceuil from './components/acceuil';
import { Outlet } from 'react-router-dom';
import { LangProvider } from './changeLang';
function App() {

 
  
  return ( 
    <LangProvider>
      <Router>
        
        <Routes>
          <Route path='/' element = {<SharedNav/>}>

            <Route index element= {<Acceuil/>}/>
              
          </Route>
        </Routes>
      </Router>
    </LangProvider>

  );
}

export default App
