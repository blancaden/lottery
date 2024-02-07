import React from 'react'
import ReactDOM from 'react-dom/client';  
import App from './components/App/App'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserList from './components/UserList';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <UserList /> */}
  </BrowserRouter>,
)
