import React, {useEffect, useReducer, useState} from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import styles from './app.module.css';
import Section from "../section/section";
import BurgerIngredients from "../burger-ingredients/buger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../services/api";
import {apiUrl} from "../../utils/constants";
import DisplayError from "../error/display-error";
import Loading from "../loading/loading";
import {BurgerConstructorContext, TotalPriceContext} from "../../services/app-context";
import {getFakeConstructor} from "../../utils/utils";
import {initialValue, setPriceAction, totalPriceReducer} from "../../services/total-price-reducer";
import {useFetching} from "../../hooks/useFetching";

const App = () => {
  const style = styles.app

  const [state, setState] = useState({
    data: []
  })

  const [constructor, setConstructor] = useState({
    bun: null,
    ingredients: []
  })

  const [totalPriceState, totalPriceDispatcher] = useReducer(totalPriceReducer, initialValue);

  const [fetching, isLoading, error] = useFetching(
    async () => {
      const api = new Api(apiUrl);
      const data = await api.getIngredients();
      setState({...state, data: data.data});

      const constructor = getFakeConstructor(data.data);
      setConstructor(constructor);

      totalPriceDispatcher(setPriceAction(constructor))
    }
  )

  useEffect(() => {
    fetching();
  }, [])

  return (
    <div className={style}>
      <AppHeader/>
      <Main>
        {isLoading && <Loading absolute={true}/>}
        {error && <DisplayError error={error} absolute={true}/>}
        {!isLoading && !error && state.data.length > 0 && (
          <>
            <Section>
              <BurgerIngredients data={state.data}/>
            </Section>
            <Section>
              <BurgerConstructorContext.Provider value={{constructor, setConstructor}}>
                <TotalPriceContext.Provider value={{totalPriceState, totalPriceDispatcher}}>
                  <BurgerConstructor/>
                </TotalPriceContext.Provider>
              </BurgerConstructorContext.Provider>
            </Section>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
