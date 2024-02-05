import { removeUserLocal } from '../../../../domain/use-cases/user-local/remove-user-local';
import { useUserLocal } from '../../../hooks/use-user-local';

const userProfileInfoModel = () => {

  const { user } = useUserLocal()
  const removeSession = async () => {
    await removeUserLocal();
  }

  return {
    removeSession,
    user
  }
}

export default userProfileInfoModel