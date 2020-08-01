import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router";

function App() {
  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  );
}
export default App;
