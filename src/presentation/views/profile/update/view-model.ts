import { ImagePickerAsset, MediaTypeOptions, launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from 'react';
import { storage } from '../../../../../db';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { saveUserLocal } from '../../../../domain/use-cases/user-local/save-user-local';
import { useUserLocal } from '../../../hooks/use-user-local';
import { updateUser } from '../../../../domain/use-cases/user/update';
import { User } from '../../../../domain/entities/User';

const useUpdateProfileViewModel = (user: User) => {

  const [errorMessage, setErrorMessage] = useState('')
  const [file, setFile] = useState<ImagePickerAsset>()
  const [isLoading, setIsLoading] = useState(false)
  const { getUserSession } = useUserLocal()
  const [values, setValues] = useState(user);

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value
    })
  }

  const onChangeInfo = (firstName: string, lastName: string, phone: string) => {
    setValues({
      ...values,
      firstName,
      lastName,
      phone
    })
  }

  const onUpload = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled) {
      setFile(result.assets[0]);
      await uplodaImage(result.assets[0].uri);
    }
  }

  const uplodaImage = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, `images/${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log('File available at', downloadURL);
          onChange('image', downloadURL); 
        });
      }
    );
  }

  const onCameraOpen = async () => {
    let result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  }

  const isValidForm = (): boolean => {
    const { firstName, lastName, phone, image } = values;

    if(firstName === '') {
      setErrorMessage('First name is required')
      return false
    }
    if(lastName === '') {
      setErrorMessage('Last name is required`')
      return false
    }
    if(phone === '') {
      setErrorMessage('Phone number is required`')
      return false
    }
    setErrorMessage('')
    return true
  }

  const update = async () => {
    if(!isValidForm()) return;

    try {
      setIsLoading(true)
      const {data, message, success} = await updateUser(values, file!);
      if(!success) {
        console.log(message);
        setErrorMessage(message)
      } else {
        console.log("data updated", data);
        await saveUserLocal(data)
        getUserSession()
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }


  return {
    ...values,
    onChange,
    update,
    errorMessage,
    isValidForm,
    onUpload,
    onCameraOpen,
    file,
    user,
    isLoading,
    onChangeInfo,
  }
}

export default useUpdateProfileViewModel
