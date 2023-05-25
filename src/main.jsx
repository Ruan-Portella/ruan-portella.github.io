import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import PageProvider from './context/PageProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <PageProvider>
       <App />
    </PageProvider>
  </HashRouter>
)
