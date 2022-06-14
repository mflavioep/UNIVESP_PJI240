import React from 'react';
import { createRoot } from 'react-dom/client'

//import Css do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//import do arquivo App.js
import App from './App';

createRoot(document.getElementById('root')).render(<App />)