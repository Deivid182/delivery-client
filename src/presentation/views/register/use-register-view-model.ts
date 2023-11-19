import { useState } from 'react';

const useRegisterViewModel = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value
    })
  }

  return {
    ...values,
    onChange
  }
}

export default useRegisterViewModel
