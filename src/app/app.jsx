import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routing from "../pages";
import AppHeader from "../components/app-header/app-header";
import styles from './app.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AppHeader/>
        <Routing/>
      </div>
    </BrowserRouter>
  );
}

export default App;
