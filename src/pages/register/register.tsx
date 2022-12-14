import React, {SyntheticEvent} from 'react';
import Form from "../../components/form/form";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {routes} from "../../utils/routes";
import PageContent from "../../components/page-content/page-content";
import {useForm} from "../../hooks/useForm";
import {useFetching} from "../../hooks/useFetching";
import api from "../../api";
import Loading from "../../components/loading/loading";
import FormAnnotation from "../../components/form/form-annotation";

type TFormState = {
  email: string;
  password: string,
  name: string;
}

const Register = () => {

  const {form, onChange} = useForm<TFormState>({email: '', password: '', name: ''});

  const {fetching, isLoading, error} = useFetching(async () => {
    const result = await api.register(form);
    console.log(result);
  })

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    fetching()
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
      <Form title='Регистрация' error={error} onSubmit={onSubmit}>
        <Input value={form.name} onChange={onChange} name='name' placeholder='Имя'
               type='text'/>
        <EmailInput value={form.email} name="email" onChange={onChange}/>
        <PasswordInput value={form.password} name="password" onChange={onChange}/>
        <Button>
          Зарегестрироваться
        </Button>
      </Form>
      <FormAnnotation items={[
        {id: 1, title: "Уже зарегестрированы?", to: routes.login, linkText: "Войти"},
      ]}/>
    </PageContent>
  );
};

export default Register;
