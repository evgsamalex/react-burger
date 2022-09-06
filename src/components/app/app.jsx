import React from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import styles from './app.module.css';
import Section from "../section/section";
import BurgerIngredients from "../burger-ingredients/buger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <DndProvider backend={HTML5Backend}>
        <Main>
          <Section>
            <BurgerIngredients/>
          </Section>
          <Section>
            <BurgerConstructor/>
          </Section>
        </Main>
      </DndProvider>
    </div>
  );
}

export default App;
