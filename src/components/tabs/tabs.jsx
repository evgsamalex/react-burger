import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs.module.css';
import {tabsSlice} from "../../services/reducers/tabsSlice";

const Tabs = ({categories}) => {

  const {selected} = useSelector(state => state.tabs)
  const dispatch = useDispatch();

  const selectTab = (type) => {
    dispatch(tabsSlice.actions.select(type))
  }

  return (
    <div className={styles.tabs}>
      {
        categories.map((item) => (
          <Tab key={item.type} active={item.type === selected} value={item.type}
               onClick={selectTab}>{item.name}</Tab>
        ))
      }
    </div>
  );
};

export default Tabs;
