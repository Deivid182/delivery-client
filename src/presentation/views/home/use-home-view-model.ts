import { useState } from 'react';
import { loginAuth } from '../../../domain/use-cases/auth/login-auth';
import { saveUserLocal } from '../../../domain/use-cases/user-local/save-user-local';
import { useUserLocal } from '../../hooks/use-user-local';
const useHomeViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const { user, getUserSession } = useUserLocal();
  console.log(user);

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value
    })
  }

  const isValidForm = (): boolean => {
    const { email, password } = values;

    if(email === '') {
      setErrorMessage('Email is required')
      return false
    }

    if(password === '') {
      setErrorMessage('Password is required')
      return false
    }

    return true
  }

  const login = async () => {
    if(isValidForm()) {
      const { data, message, success } = await loginAuth(values.email, values.password);
      console.log('from login model');  
      if(!success) {
        setErrorMessage(message)
      } else {
        await saveUserLocal(data);
        getUserSession();
      }
    }
  }

  return {
    ...values,
    onChange,
    login,
    errorMessage,
    user
  }
}

export default useHomeViewModel
