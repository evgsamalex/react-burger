import React from 'react';
import styles from "./burger-constructor-order.module.css";
import TotalPrice from "../total-price/total-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {createOrderAsync} from "../../services/actions/createOrderAsync";
import {isNullOrEmpty, selectIngredientsIds} from "../../utils/utils";
import Modal from "../modal/modal";
import Loading from "../loading/loading";
import OrderDetails from "../order-details/order-details";
import DisplayError from "../error/display-error";
import {orderSlice} from "../../services/reducers/orderSlice";

const BurgerConstructorOrder = () => {

  const constructor = useSelector(store => store.burgerConstructor);

  const {isLoading, error, order, isOpen} = useSelector(store => store.order);

  const dispatch = useDispatch();

  const createOrder = () => {
    dispatch(createOrderAsync(selectIngredientsIds(constructor)));
  }

  return (
    <>
      <div className={styles.container + ' mt-10 mb-10 mr-4'}>
        <TotalPrice/>
        <Button onClick={createOrder}>Оформить заказ</Button>
      </div>
      {
        isOpen &&
        <Modal onClose={() => dispatch(orderSlice.actions.close())}>
          {
            isLoading && <Loading text='Создаем заказ...'/>
          }
          {
            !isNullOrEmpty(order) && <OrderDetails order={order}/>
          }
          {
            error && <DisplayError error={error}/>
          }
        </Modal>
      }
    </>
  );
};

export default BurgerConstructorOrder;
