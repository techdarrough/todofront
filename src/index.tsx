import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './Pages/Create'
import Edit from './Pages/Edit'
import Main from './Pages/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//this 
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
   
    <Router>
    <App />
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/create" element={<Create />} />
    <Route path="/edit/:todo_id" element={<Edit />} />


    </Routes>
    </Router>

  </React.StrictMode>
);

