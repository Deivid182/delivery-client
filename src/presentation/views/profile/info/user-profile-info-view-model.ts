import { removeUserLocal } from '../../../../domain/use-cases/user-local/remove-user-local';

const userProfileInfoModel = () => {

  const removeSession = async () => {
    await removeUserLocal();
  }

  return {
    removeSession
  }
}

export default userProfileInfoModel