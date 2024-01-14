import { useState } from "react";
import { loginAuth } from "../../../domain/use-cases/auth/login-auth";
import { saveUserLocal } from "../../../domain/use-cases/user-local/save-user-local";
import { useUserLocal } from "../../hooks/use-user-local";
const useHomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { user, getUserSession } = useUserLocal();

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value,
    });
  };

  const isValidForm = (): boolean => {
    const { email, password } = values;

    if (email === "") {
      setErrorMessage("Email is required");
      return false;
    }

    if (password === "") {
      setErrorMessage("Password is required");
      return false;
    }

    return true;
  };

  const login = async () => {
    if (isValidForm()) {
      try {
        setIsLoading(true);
        const { data, message, success } = await loginAuth(
          values.email,
          values.password
        );
        setIsLoading(false);
        console.log(data);
        if (!success) {
          setErrorMessage(message);
        } else {
          await saveUserLocal(data);
          getUserSession();
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    ...values,
    onChange,
    login,
    errorMessage,
    user,
    isLoading,
  };
};

export default useHomeViewModel;
