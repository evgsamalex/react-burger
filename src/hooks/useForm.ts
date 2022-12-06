import React, {SyntheticEvent, useState} from "react";

export interface FormState {
  [key: string]: string | number | {} | any;
}

type CustomChange = {
  target: {
    name: string;
    value: string | number | {};
  }
}

export type FormChange = React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> | CustomChange

export interface UseForm<T> {
  form: T,
  onChange: (e: FormChange) => void,

  reset: (e: SyntheticEvent) => void;
}

export const useForm = <T extends FormState>(initialState: T): UseForm<T> => {
  const [form, setValue] = useState(initialState);

  const onChange = (e: FormChange) => {
    setValue({...form, [e.target.name]: e.target.value});
  }

  const reset = (e: SyntheticEvent) => {
    e.preventDefault();
    setValue(initialState)
  }

  return {form, onChange, reset};
}
