import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import PageProvider from './context/PageProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PageProvider>
       <App />
    </PageProvider>
  </BrowserRouter>
)
