import React from 'react';
import withPage from "../providers/with-page";
import {useForm} from "../../hooks/useForm";
import PageContent from "../../components/page-content/page-content";
import Form from "../../components/form/form";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";

const ResetPassword = () => {
  const [form, onChange] = useForm({code: '', password: ''});

  return (
    <PageContent>
      <Form title='Восстановление пароля'>
        <PasswordInput value={form.password} name="password" onChange={onChange}/>
        <Input value={form.code} onChange={onChange} placeholder='Введите код из письма'/>
        <Button>
          Войти
        </Button>
      </Form>
      <p className='text text_type_main-small text_color_inactive mt-20'>Вспомнили пароль? <Link to={routes.login}
                                                                                                 className='text text_type_main-small link'>Войти</Link>
      </p>
    </PageContent>
  );
};

export default withPage(ResetPassword);
