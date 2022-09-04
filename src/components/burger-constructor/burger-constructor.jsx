import React, {useContext, useState} from 'react';
import styles from './burger-constructor.module.css'
import {Button, ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {BurgerConstructorContext} from "../../services/app-context";
import TotalPrice from "../total-price/total-price";
import Loading from "../loading/loading";
import {useFetching} from "../../hooks/useFetching";
import DisplayError from "../error/display-error";
import {selectIngredientsIds} from "../../utils/utils";
import {api} from "../../services/api";

const BurgerConstructor = () => {

  const [modalState, setModalState] = useState({
    isOpen: false
  })

  const [orderState, setOrderState] = useState({
    success: false,
    order: {
      number: 0
    },
  })

  const {constructor} = useContext(BurgerConstructorContext);

  const [createOrder, isLoading, error] = useFetching(
    async () => {
      setModalState({...modalState, isOpen: true})

      const response = await api.createOrder(selectIngredientsIds(constructor));

      if (response.success) {
        setOrderState({success: true, order: {number: response.order.number}})
      } else {
        setOrderState({...orderState, success: false})
      }
    }
  )

  if (!constructor.bun && constructor.ingredients.length === 0) {
    return (
      <div className={styles.ingredients + ' pt-25'}>
      </div>
    )
  }

  return (
    <div className={styles.ingredients + ' pt-25'}>
      <div className={styles.constructor__lock + ' pl-4 pr-6 pb-4'}>
        <ConstructorElement text={constructor.bun.name + ' (верх)'} thumbnail={constructor.bun.image}
                            price={constructor.bun.price} type={'top'}
                            isLocked={true}/>
      </div>
      <div className={styles.constructor__items}>
        <ul className={styles.constructor__list}>
          {constructor.ingredients.map((ingredient) => {
            return (
              <li key={ingredient._id} className={styles.constructor__item + ' ml-4 mr-4'}
              >
                <DragIcon type="primary"/>
                <ConstructorElement text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price}/>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.constructor__lock + ' pl-4 pr-6 pt-4'}>
        <ConstructorElement text={constructor.bun.name + ' (низ)'} thumbnail={constructor.bun.image}
                            price={constructor.bun.price} type={'bottom'}
                            isLocked={true}/>
      </div>
      <div className={styles.total + ' mt-10 mb-10 mr-4'}>
        <TotalPrice/>
        <Button onClick={createOrder}>Оформить заказ</Button>
      </div>
      {
        modalState.isOpen &&
        <Modal onClose={() => setModalState({...modalState, isOpen: false})}>
          {
            isLoading && <Loading text='Создаем заказ...'/>
          }
          {
            !isLoading && orderState.success && <OrderDetails order={orderState.order}/>
          }
          {
            error && <DisplayError error={error}/>
          }
        </Modal>
      }
    </div>
  );
};

BurgerConstructor.propTypes = {};


export default BurgerConstructor;
