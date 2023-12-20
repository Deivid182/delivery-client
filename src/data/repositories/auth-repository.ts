import { AxiosError } from 'axios';
import { User } from '../../domain/entities/User';
import { AuthRepository } from '../../domain/repositories/auth-repository';
import { apiDelivery } from '../sources/remote/api/api-delivery';
import { ResponseApiDelivery } from '../sources/remote/models/response-api-delivery';

export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const { data } = await apiDelivery.post<ResponseApiDelivery>('/users/register/', user)
      return Promise.resolve(data)
    } catch (error) {
      const e = (error as AxiosError)
      console.log('Error' + e.response?.data);
      const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
      return Promise.resolve(apiError)
    }
  }

  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const { data } = await apiDelivery.post<ResponseApiDelivery>('/users/login/', {email, password})
      console.log('RESPONSE: ', JSON.stringify(data));
      return Promise.resolve(data)
    } catch (error) {
      const e = (error as AxiosError)
      const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
      return Promise.resolve(apiError)
    }
  }
}