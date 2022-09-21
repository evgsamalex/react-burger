import React, {useState} from 'react';
import withPage from "../providers/with-page";
import PageContent from "../../components/page-content/page-content";
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";
import Form from "../../components/form/form";

const Login = () => {

  const [form, setValue] = useState({email: '', password: ''});

  const onChange = e => {
    setValue({...form, [e.target.name]: e.target.value});
  }

  return (
    <PageContent>
      <Form title='Вход'>
        <EmailInput value={form.email} name="email" onChange={onChange}/>
        <PasswordInput value={form.password} name="password" onChange={onChange}/>
        <Button>
          Войти
        </Button>
      </Form>
      <p className='text text_type_main-small text_color_inactive mt-20'>Вы - новый
        пользователь? <Link to={routes.register} className='text text_type_main-small link'>Зарегистрироваться</Link>
      </p>
      <p className='text text_type_main-small text_color_inactive mt-4'>Забыли
        пароль? <Link to={routes.resetPassword} className='text text_type_main-small link'>Восстановить пароль</Link>
      </p>
    </PageContent>
  );
};

export default withPage(Login);
