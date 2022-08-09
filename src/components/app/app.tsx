import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import styles from './app.module.css';
import Section from "../section/section";
import BurgerIngredients from "../burger-ingredients/buger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../api/api";
import {apiUrl} from "../../utils/constants";
import DisplayError from "../error/display-error";
import Loading from "../loading/loading";

const App = () => {
  const style = styles.app

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    error: '',
    data: []
  })

  useEffect(() => {
    const getIngredients = async () => {
      const api = new Api(apiUrl);
      try {
        const data = await api.getIngredients();
        setState({...state, data: data.data, isLoading: false, hasError: false});
      } catch (e: any) {
        console.log(e)
        setState({...state, hasError: true, error: e.message})
      }
    }

    getIngredients()

  }, [])

  return (
    <div className={style}>
      <AppHeader/>
      <Main>
        {state.isLoading && <Loading/>}
        {state.hasError && <DisplayError error={state.error}/>}
        {!state.isLoading && !state.hasError && state.data.length > 0 && (
          <>
            <Section>
              <BurgerIngredients data={state.data}/>
            </Section>
            <Section>
              <BurgerConstructor data={state.data}/>
            </Section>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
