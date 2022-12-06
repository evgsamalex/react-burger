import React, {FC} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs.module.css';
import {tabsSlice} from "../../services/reducers/tabsSlice";
import {IngredientType, TCategory} from "../../services/types/data";
import {useAppDispatch, useAppSelector} from "../../services/hooks";

const Tabs: FC<{ categories: Array<TCategory> }> = ({categories}) => {

  const {selected} = useAppSelector(state => state.tabs)
  const dispatch = useAppDispatch();

  const selectTab = (type: IngredientType) => {
    dispatch(tabsSlice.actions.select(type))
  }

  return (
    <div className={styles.tabs}>
      {
        categories.map((item) => (
          <Tab key={item.type} active={item.type === selected} value={item.type}
               onClick={() => selectTab(item.type)}>{item.name}</Tab>
        ))
      }
    </div>
  );
};

export default Tabs;
