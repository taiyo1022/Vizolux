import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/login/`} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
