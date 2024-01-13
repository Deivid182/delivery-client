import { type Role } from "./Role"

export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string
  passwordConfirmation: string
  image?: string
  phone: string
  token?: string
  roles?: Role[]
}