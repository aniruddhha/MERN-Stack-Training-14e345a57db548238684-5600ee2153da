import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Invoice from './invoice.component';
import Expense from './expenses.component';
import NotFound from './not-found.component';

const startComponent = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='invoice/:invid' element={<Invoice />} />
        <Route path='expense' element={<Expense />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(startComponent, document.getElementById('root'));

