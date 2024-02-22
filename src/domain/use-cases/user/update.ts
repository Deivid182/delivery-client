import { ImagePickerAsset } from "expo-image-picker";
import { UserRepositoryImpl } from "../../../data/repositories/user-repository";
import { User } from "../../entities/User";

const { update } = new UserRepositoryImpl()

export const updateUser = async (user: User, image: ImagePickerAsset) => {
  return await update(user, image)
}