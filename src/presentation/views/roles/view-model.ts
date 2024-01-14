import { useUserLocal } from '../../hooks/use-user-local'

const useRoleViewModel  = () => {

  const { user } = useUserLocal()
  

  return {
    user
  }
}

export default useRoleViewModel