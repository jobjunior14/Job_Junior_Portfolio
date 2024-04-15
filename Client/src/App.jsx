import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedNav from './components/navBar/Oulet';
import { LangProvider } from './changeLang';
import Footer from './components/footer';
import { lazy } from 'react';
const Acceuil = lazy(() => import  ('./components/acceuil'));
const Projets = lazy (() => import ('./components/projets'));
const Contacts = lazy (() => import ('./components/contacts'));
import { Suspense } from 'react';
import FallBack from './components/utils/fallBackForSuspence';
import LoadingError from './components/utils/loadingErrorPage';


function App() {

 
  
  return ( 
    <LangProvider>
      <Router>
        
        <Routes>
          <Route path='*' element = {<LoadingError/>}/>
          <Route path='/' element = {<SharedNav/>}>

            <Route index element= {<Suspense fallback={<FallBack/>}><Acceuil/></Suspense>}/>
            <Route path='projects' element= {<Suspense fallback={<FallBack/>}><Projets/></Suspense>}/>
            <Route path='contacts' element= {<Suspense fallback={<FallBack/>}><Contacts/></Suspense>}/>
            
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </LangProvider>

  );
}

export default App
