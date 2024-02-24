import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../../domain/entities/User";
import { saveUserLocal } from "../../domain/use-cases/user-local/save-user-local";
import { getUserLocal } from "../../domain/use-cases/user-local/get-user-local";
import { removeUserLocal } from "../../domain/use-cases/user-local/remove-user-local";

export const InitialState: User = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  image: '',
  phone: '',
  token: '',
  roles: []
}

export interface Props {
  user: User
  saveUserSession: (user: User) => void
  getUserSession: () => void
  removeUserSession: () => void
}

export const UserContext = createContext<Props>({
  user: InitialState,
  saveUserSession: () => {},
  getUserSession: () => {},
  removeUserSession: () => {}
})

export const useUser = () => {
  return useContext(UserContext)
}

export const UserProvider = ({children}: {children: React.ReactNode}) => {


  const [user, setUser] = useState(InitialState)

  useEffect(() => {
    getUserSession()
  }, [])

  const saveUserSession = async (user: User) => {
    await saveUserLocal(user)
    setUser(user)
  }

  const getUserSession = async () => {
    const user = await getUserLocal();
    setUser(user)
  }

  const removeUserSession = async () => {
    await removeUserLocal();
    setUser(InitialState)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        saveUserSession,
        getUserSession,
        removeUserSession
      }}
    >
      {children}
    </UserContext.Provider>
  )
}