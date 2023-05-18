import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={ <Home /> }/>
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default App;

