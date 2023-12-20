import { useEffect, useState } from 'react';
import { User } from '../../domain/entities/User';
import { getUserLocal } from '../../domain/use-cases/user-local/get-user-local';

export const useUserLocal = () => {

  const [user, setUser] = useState<User>();

  const getUserSession = async () => {
    const user = await getUserLocal();
    setUser(user);
  }

  useEffect(() => {
    getUserSession() 
  }, [])

  return {user, getUserSession}
}