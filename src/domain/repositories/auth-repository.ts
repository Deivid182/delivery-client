import { ResponseApiDelivery } from '../../data/sources/remote/models/response-api-delivery';
import { User } from '../entities/User';

export interface AuthRepository {
  register(user: User): Promise<ResponseApiDelivery>;

  login(email: string, password: string): Promise<ResponseApiDelivery>
}