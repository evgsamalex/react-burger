import React from 'react';
import withPage from "../providers/with-page";
import {useForm} from "../../hooks/useForm";
import PageContent from "../../components/page-content/page-content";
import Form from "../../components/form/form";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";

const ForgotPassword = () => {

  const [form, onChange] = useForm({email: ''});

  return (
    <PageContent>
      <Form title='Восстановление пароля'>
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

export default withPage(ForgotPassword);
