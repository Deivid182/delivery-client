import { User } from "../../domain/entities/User";

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