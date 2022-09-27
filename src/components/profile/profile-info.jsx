import React from 'react';
import {useForm} from "../../hooks/useForm";
import Form from "../form/form";
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import css from './profile-info.module.css'
import {useAuth} from "../../hooks/useAuth";
import Loading from "../loading/loading";
import {updateUserAsync} from "../../services/actions/user/updateUserAsync";

const ProfileInfo = () => {

  const [, user, isLoading, error] = useAuth();

  const [form, onChange, , reset] = useForm({email: user.email, name: user.name, password: ''})

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAsync(form));
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    <Form onSubmit={onSubmit} error={error}>
      <Input value={form.name} onChange={onChange} placeholder='Имя' name='name' type='text'/>
      <EmailInput value={form.email} name='email' onChange={onChange}/>
      <PasswordInput value={form.password} name='password' onChange={onChange}/>
      {!equals(form, user) &&
        <div className={css.buttons}>
          <Button>Сохранить</Button>
          <Button type={"secondary"} onClick={reset}>Отмена</Button>
        </div>
      }
    </Form>
  );
};

const equals = (form, user) => {
  return form.name === user.name && form.email === user.email && !form.password
}

export default ProfileInfo;
