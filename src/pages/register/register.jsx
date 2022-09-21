import React from 'react';
import withPage from "../providers/with-page";
import {useState} from "react";
import Form from "../../components/form/form";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";
import PageContent from "../../components/page-content/page-content";

const Register = () => {

  const [form, setValue] = useState({email: '', password: '', name: ''});

  const onChange = e => {
    setValue({...form, [e.target.name]: e.target.value});
  }

  return (
    <PageContent>
      <Form title='Регистрация'>
        <Input value={form.name} onChange={onChange} name='name' placeholder='Имя' type='text'/>
        <EmailInput value={form.email} name="email" onChange={onChange}/>
        <PasswordInput value={form.password} name="password" onChange={onChange}/>
        <Button>
          Зарегестрироваться
        </Button>
      </Form>
      <p className='text text_type_main-small text_color_inactive mt-20'>Уже зарегестрированы? <Link to={routes.login}
                                                                                                     className='text text_type_main-small link'>Войти</Link>
      </p>
    </PageContent>
  );
};

export default withPage(Register);
