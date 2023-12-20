import { User } from '../../domain/entities/User';
import { UserLocalRepository } from '../../domain/repositories/user-local-repository';
import { localStorage } from '../sources/local/local-storage';

export class UserLocalRepositoryImpl implements UserLocalRepository {
  async saveUser(user: User): Promise<void> {
    const { save } = localStorage();
    await save('user', JSON.stringify(user));
  }

  async getUser(): Promise<User> {
    const { getItem } = localStorage();
    const user = await getItem('user');
    return user ? JSON.parse(user) : null
  }

  async removeUser(): Promise<void> {
    const { removeItem } = localStorage();
    await removeItem('user');
  }
}