import {useState} from "react";

export const useForm = (initialState) => {

  const [form, setValue] = useState(initialState);

  const onChange = e => {
    setValue({...form, [e.target.name]: e.target.value});
  }

  return [form, setValue, onChange];
}
