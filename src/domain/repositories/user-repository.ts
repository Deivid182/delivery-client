import { ResponseApiDelivery } from '../../data/sources/remote/models/response-api-delivery';
import { User } from "../../domain/entities/User";
import { ImagePickerAsset, MediaTypeOptions, launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';

export interface UserRepository {
  update(user: User, image: ImagePickerAsset): Promise<ResponseApiDelivery>;
}