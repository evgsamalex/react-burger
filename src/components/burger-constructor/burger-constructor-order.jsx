import React from 'react';
import styles from "./burger-constructor-order.module.css";
import TotalPrice from "../total-price/total-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {createOrderAsync} from "../../services/actions/createOrderAsync";
import {isNullOrEmpty, selectIngredientsIds} from "../../utils/utils";
import Modal from "../modal/modal";
import Loading from "../loading/loading";
import DisplayError from "../error/display-error";
import {createOrderSlice} from "../../services/reducers/create-order-slice";
import {burgerConstructorSlice} from "../../services/reducers/burgerConstructorSlice";
import {useAuth} from "../../hooks/useAuth";
import {useHistory} from "react-router-dom";
import {routes} from "../../utils/routes";
import OrderResult from "../order-result/order-result";

const BurgerConstructorOrder = () => {

  const constructor = useSelector(store => store.burgerConstructor);

  const {isLoading, error, order, isOpen} = useSelector(store => store.order);

  const [auth] = useAuth();

  const dispatch = useDispatch();

  const history = useHistory()

  const createOrder = () => {
    if (!auth) {
      history.push(routes.login);
      return;
    }
    dispatch(createOrderAsync(selectIngredientsIds(constructor)));
  }

  const close = () => {
    dispatch(createOrderSlice.actions.close());
    if (!isNullOrEmpty(order)) {
      dispatch(burgerConstructorSlice.actions.clear())
    }
  }

  return (
    <>
      <div className={styles.container + ' mt-10 mb-10 mr-4'}>
        <TotalPrice/>
        <Button onClick={createOrder}>Оформить заказ</Button>
      </div>
      {
        isOpen &&
        <Modal onClose={close}>
          {
            isLoading && <Loading text='Создаем заказ...'/>
          }
          {
            !isNullOrEmpty(order) && <OrderResult order={order}/>
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
