import React, {FC, SyntheticEvent} from 'react';
import {useForm} from "../../hooks/useForm";
import Form from "../form/form";
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import css from './profile-info.module.css'
import {useAuth} from "../../hooks/useAuth";
import Loading from "../loading/loading";
import {updateUserAsync} from "../../services/actions/user/updateUserAsync";
import {useAppDispatch} from "../../services/hooks";
import {TUser} from "../../services/types/data";

type TUserFormState = {
  email: string,
  name: string,
  password: string
}

const ProfileInfo: FC = () => {

  const {user, isLoading, error} = useAuth();

  const initialState = user ? {email: user.email, name: user.name, password: ''} : {email: '', name: '', password: ''}

  const {form, onChange, reset} = useForm<TUserFormState>(initialState);

  const dispatch = useAppDispatch();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const user = form as TUser;
    dispatch(updateUserAsync(user));
  }

  if (isLoading) {
    return <Loading/>
  }

  if (!user) return null;

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

const equals = (form: TUserFormState, user: TUser) => {
  return form.name === user.name && form.email === user.email && !form.password
}

export default ProfileInfo;
