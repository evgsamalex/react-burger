import React, {useEffect, useReducer, useState} from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import styles from './app.module.css';
import Section from "../section/section";
import BurgerIngredients from "../burger-ingredients/buger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import DisplayError from "../error/display-error";
import Loading from "../loading/loading";
import {BurgerConstructorContext, TotalPriceContext} from "../../services/app-context";
import {getFakeConstructor} from "../../utils/utils";
import {initialValue, setPriceAction, totalPriceReducer} from "../../services/total-price-reducer";
import {useFetching} from "../../hooks/useFetching";
import {api} from "../../services/api";

const App = () => {
  const style = styles.app

  /*const [state, setState] = useState({
    data: []
  })

  const [constructor, setConstructor] = useState({
    bun: null,
    ingredients: []
  })

  const [totalPriceState, totalPriceDispatcher] = useReducer(totalPriceReducer, initialValue);

  const [fetching, isLoading, error] = useFetching(
    async () => {
      const data = await api.getIngredients();
      setState({...state, data: data.data});

      const constructor = getFakeConstructor(data.data);
      setConstructor(constructor);

      totalPriceDispatcher(setPriceAction(constructor))
    }
  )*/

  /*useEffect(() => {
    fetching();
  }, [])*/

  return (
    <div className={style}>
      <AppHeader/>
      <Main>
        <Section>
          <BurgerIngredients/>
        </Section>
        <Section>
          gdfjskjfhksj
        </Section>
      </Main>
    </div>
  );
}

export default App;
