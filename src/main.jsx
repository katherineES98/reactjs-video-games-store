import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
//import App from './App'
import { GamesApp } from "./GamesApp";
import { Provider } from "react-redux";
import "./styles.css";
import { store } from "./store";
import 'animate.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/**en el punto mas alto de la aplicacion coloco mi provider en la cual proveera informacion al store , ami tienda de redux */}
    <Provider store={store} >
      <BrowserRouter>
        <GamesApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
