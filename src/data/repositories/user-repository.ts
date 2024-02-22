import { ImagePickerAsset } from "expo-image-picker";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/user-repository";
import { ResponseApiDelivery } from "../sources/remote/models/response-api-delivery";
import { AxiosError } from "axios";
import { apiDelivery } from "../sources/remote/api/api-delivery";
export class UserRepositoryImpl implements UserRepository {
  async update(user: User, image: ImagePickerAsset): Promise<ResponseApiDelivery> {
    try {
      const { data } = await apiDelivery.patch<ResponseApiDelivery>(`/users/update/${user.id}`, user)
      return Promise.resolve(data)
    } catch (error) {
      const e = (error as AxiosError)
      console.log('Error' + e.response?.data);
      const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
      return Promise.resolve(apiError)
    }
  }
}