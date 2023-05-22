import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import DetailsProject from './components/DetailsProject';
import PageContext from './context/PageContext';
import { useContext } from 'react';


function App() {
  const location = useLocation();
  const {isDark} = useContext(PageContext);

  return (
    <div className={`App ${isDark ? '' : 'light'}`} >
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={ <Home />}/>
        <Route exact path="/details/:id" element={<DetailsProject />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default App;

