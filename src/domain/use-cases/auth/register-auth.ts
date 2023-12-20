import { AuthRepositoryImpl } from '../../../data/repositories/auth-repository';
import { User } from '../../entities/User';

const { register } = new AuthRepositoryImpl();

export const registerAuth = async (user: User) => {
  return await register(user)
}