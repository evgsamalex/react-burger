import React from 'react';
import {HTML5Backend} from "react-dnd-html5-backend";
import Main from "../../components/main/main";
import Section from "../../components/section/section";
import BurgerIngredients from "../../components/burger-ingredients/buger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";

const Home = () => {
  return (
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
  );
};

export default Home;
