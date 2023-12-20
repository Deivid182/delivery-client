import { UserLocalRepositoryImpl } from '../../../data/repositories/user-local-repository';

const { getUser } = new UserLocalRepositoryImpl()

export const getUserLocal = async () => {
  return await getUser()
}