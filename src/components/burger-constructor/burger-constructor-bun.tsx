import React, {FC} from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor-bun.module.css';
import {TBurgerConstructorItem} from "../../services/types/data";

type TBurgerConstructorBunProps = {
  bun: TBurgerConstructorItem;
  isUp: boolean;
}

const BurgerConstructorBun: FC<TBurgerConstructorBunProps> = ({bun, isUp}) => {
  const type = isUp ? 'top' : 'bottom';
  const description = isUp ? 'верх' : 'низ';

  return (
    <div className={styles.bun + ' pl-4 pr-6 pb-4'}>
      <ConstructorElement text={bun.name + ` (${description})`} thumbnail={bun.image}
                          price={bun.price} type={type}
                          isLocked={true}/>
    </div>
  );
};

export default BurgerConstructorBun;
