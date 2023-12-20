import { AuthRepositoryImpl } from '../../../data/repositories/auth-repository';

const { login } = new AuthRepositoryImpl();

export const loginAuth = (email: string, password: string) => {
  return login(email, password)
}