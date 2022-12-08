import React, {FC, SyntheticEvent} from 'react';
import PageContent from "../../components/page-content/page-content";
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {routes} from "../../utils/routes";
import Form from "../../components/form/form";
import {useForm} from "../../hooks/useForm";
import {useAuth} from "../../hooks/useAuth";
import Loading from "../../components/loading/loading";
import FormAnnotation from "../../components/form/form-annotation";
import {loginAsync} from "../../services/actions/user/loginAsync";
import {useAppDispatch} from "../../services/hooks";

const Login: FC = () => {

  const {form, onChange} = useForm({email: '', password: ''});

  const {isLoading, error} = useAuth();

  const dispatch = useAppDispatch();

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(loginAsync(form))
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
      <Form title='Вход' error={error} onSubmit={onSubmit}>
        <EmailInput value={form.email} name="email" onChange={onChange}/>
        <PasswordInput value={form.password} name="password" onChange={onChange}/>
        <Button>
          Войти
        </Button>
      </Form>
      <FormAnnotation items={[
        {id: 1, title: "Вы - новый пользователь?", to: routes.register, linkText: "Зарегистрироваться"},
        {id: 2, title: "Забыли пароль?", to: routes.forgotPassword, linkText: "Восстановить пароль"},
      ]}/>
    </PageContent>
  );
};

export default Login;
