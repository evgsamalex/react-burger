import React, {FC} from 'react';
import styles from "./burger-constructor-order.module.css";
import TotalPrice from "../total-price/total-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {createOrderAsync} from "../../services/actions/createOrderAsync";
import {selectIngredientsIds} from "../../utils/utils";
import Modal from "../modal/modal";
import Loading from "../loading/loading";
import DisplayError from "../error/display-error";
import {createOrderSlice} from "../../services/reducers/create-order-slice";
import {burgerConstructorSlice} from "../../services/reducers/burgerConstructorSlice";
import {useAuth} from "../../hooks/useAuth";
import {useHistory} from "react-router-dom";
import {routes} from "../../utils/routes";
import OrderResult from "../order-result/order-result";
import {useAppDispatch, useAppSelector} from "../../services/hooks";

const BurgerConstructorOrder: FC = () => {

  const constructor = useAppSelector(store => store.burgerConstructor);

  const {isLoading, error, order, isOpen} = useAppSelector(store => store.order);

  const {auth} = useAuth();

  const dispatch = useAppDispatch();

  const history = useHistory()

  const createOrder = async () => {
    if (!auth) {
      history.push(routes.login);
      return;
    }
    await dispatch(createOrderAsync(selectIngredientsIds(constructor)));
  }

  const close = () => {
    dispatch(createOrderSlice.actions.close());
    if (!order) {
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
            order && <OrderResult order={order}/>
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
