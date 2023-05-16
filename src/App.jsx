import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  return (
    <div className="App">
        <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={ <Home /> }/>
        </Routes>
    </div>
  )
}

export default App;

