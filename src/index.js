import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Lista from './components/Lista/index';
import Cadastrar from './components/Cadastrar/index';
import "./components/Lista/index.css";
import "./components/Cadastrar/index.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Lista />} />
      <Route path='/Cadastrar' element={<Cadastrar />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
