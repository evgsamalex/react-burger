import React, {FC, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import Routing from "../pages";
import AppHeader from "../components/app-header/app-header";
import styles from './app.module.css';
import {useAppDispatch} from "../services/hooks";
import {fetchIngredientsAsync} from "../services/actions/fetchIngredientsAsync";

const App: FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
  }, [])
  //dispatch(checkUserAsync());

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
