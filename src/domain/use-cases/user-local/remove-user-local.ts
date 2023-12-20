import { UserLocalRepositoryImpl } from '../../../data/repositories/user-local-repository';

const { removeUser } = new UserLocalRepositoryImpl()

export const removeUserLocal = async () => {
  return await removeUser()
}
