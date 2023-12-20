import { UserLocalRepositoryImpl } from '../../../data/repositories/user-local-repository';
import { User } from '../../entities/User';

const { saveUser } = new UserLocalRepositoryImpl()

export const saveUserLocal = async (user: User) => {
  return await saveUser(user)
}