import React from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import styles from './app.module.css';
import Section from "../section/section";
import BurgerIngredients from "../burger-ingredients/buger-ingredients";
import {burgerIngredients} from "../../utils/data";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const App = () => {
  const style = styles.app
  return (
    <div className={style}>
      <AppHeader />
      <Main>
        <Section>
          <BurgerIngredients data={burgerIngredients}/>
        </Section>
        <Section>
          <BurgerConstructor data={burgerIngredients} />
        </Section>
      </Main>
    </div>
  );
}

export default App;
