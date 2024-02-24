import { removeUserLocal } from '../../../../domain/use-cases/user-local/remove-user-local';
import { useUserLocal } from '../../../hooks/use-user-local';
import { useUser } from '../../../context/user-context';

const userProfileInfoModel = () => {

  // const { user } = useUserLocal()
  const { removeUserSession, user } = useUser()
  // const removeSession = async () => {
  //   await removeUserSession();
  // }

  return {
    removeUserSession,
    user
  }
}

export default userProfileInfoModel