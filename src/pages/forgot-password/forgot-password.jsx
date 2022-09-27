import React from 'react';
import {useForm} from "../../hooks/useForm";
import PageContent from "../../components/page-content/page-content";
import Form from "../../components/form/form";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect} from "react-router-dom";
import {routes} from "../../utils/routes";
import {useDispatch, useSelector} from "react-redux";
import {forgetPasswordAsync} from "../../services/actions/password/forgetPasswordAsync";
import Loading from "../../components/loading/loading";

const ForgotPassword = () => {

  const [form, onChange] = useForm({email: ''});

  const {isLoading, error, recoverySent} = useSelector(state => state.password);

  const dispatch = useDispatch();

  if (recoverySent) {
    return <Redirect to={routes.resetPassword}/>
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(forgetPasswordAsync(form.email));
  }

  if (isLoading) {
    return (
      <PageContent>
        <Loading absolute={true}/>
      </PageContent>
    )
  }

  return (
    <PageContent>
      <Form title='Восстановление пароля' onSubmit={onSubmit} error={error}>
        <EmailInput value={form.email} name="email" onChange={onChange}/>
        <Button>
          Восстановить
        </Button>
      </Form>
      <p className='text text_type_main-small text_color_inactive mt-20'>Вспомнили пароль? <Link to={routes.login}
                                                                                                 className='text text_type_main-small link'>Войти</Link>
      </p>
    </PageContent>
  );
};

export default ForgotPassword;
