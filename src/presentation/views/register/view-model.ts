import { ImagePickerAsset, MediaTypeOptions, launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from 'react';
import { storage } from '../../../../db';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { registerAuth } from '../../../domain/use-cases/auth/register-auth';
import { saveUserLocal } from '../../../domain/use-cases/user-local/save-user-local';
import { useUserLocal } from '../../hooks/use-user-local';

const useRegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const [file, setFile] = useState<ImagePickerAsset>()
  const [isLoading, setIsLoading] = useState(false)
  const { user, getUserSession } = useUserLocal()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    image: '',
    password: '',
    passwordConfirmation: ''
  });

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value
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
    const { firstName, lastName, phone, email, password, passwordConfirmation, image } = values;

    if(firstName === '') {
      setErrorMessage('First name is required')
      return false
    }
    if(lastName === '') {
      setErrorMessage('Last name is required`')
      return false
    }
    if(email === '') {
      setErrorMessage('Email is required`')
      return false
    }
    if(phone === '') {
      setErrorMessage('Phone number is required`')
      return false
    }
    if(password === '') {
      setErrorMessage('Password is required`')
      return false
    }
    if(passwordConfirmation === '') {
      setErrorMessage('Password Confirmation is required`')
      return false
    }
    if(password !== passwordConfirmation) {
      setErrorMessage('Passwords do not match is required`')
      return false
    }

    if(image === undefined || image === null || image === '') {
      setErrorMessage('Image is required')
      return false
    }
    setErrorMessage('')
    return true
  }

  const register = async () => {
    if(isValidForm()) {
      try {
        setIsLoading(true)
        const {data, message, success} = await registerAuth(values);
        if(!success) {
          console.log(message);
          setErrorMessage(message)
        } else {
          console.log(data);
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
  }

  return {
    ...values,
    onChange,
    register,
    errorMessage,
    isValidForm,
    onUpload,
    onCameraOpen,
    file,
    user,
    isLoading
  }
}

export default useRegisterViewModel
