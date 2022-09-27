import React from 'react';
import {useForm} from "../../hooks/useForm";
import PageContent from "../../components/page-content/page-content";
import Form from "../../components/form/form";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Redirect} from "react-router-dom";
import {routes} from "../../utils/routes";
import FormAnnotation from "../../components/form/form-annotation";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordAsync} from "../../services/actions/password/resetPasswordAsync";
import Loading from "../../components/loading/loading";

const ResetPassword = () => {
  const [form, onChange] = useForm({code: '', password: ''});

  const {isLoading, error, recoverySent, success} = useSelector(state => state.password);

  const dispatch = useDispatch();

  console.log(`success: ${success}`)

  if (success) {
    return <Redirect to={routes.login}/>
  }

  if (!recoverySent) {
    return <Redirect to={routes.forgotPassword}/>
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(resetPasswordAsync(form.password, form.code));
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
        <PasswordInput value={form.password} name="password" onChange={onChange}/>
        <Input value={form.code} onChange={onChange} name={'code'} placeholder='Введите код из письма'/>
        <Button>
          Восстановить
        </Button>
      </Form>
      <FormAnnotation
        items={[{id: 1, title: "Вспомнили пароль?", to: routes.login, linkText: "Войти"}]}
      />
    </PageContent>
  );
};

export default ResetPassword;
