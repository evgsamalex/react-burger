import {useState} from "react";

export const useForm = (initialState) => {
  const [form, setValue] = useState(initialState);

  const onChange = e => {
    setValue({...form, [e.target.name]: e.target.value});
  }

  const reset = e => {
    e.preventDefault();
    setValue(initialState)
  }

  return [form, onChange, setValue, reset];
}
