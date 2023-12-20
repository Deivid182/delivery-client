import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorage = () => {
  const save = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log(error, 'error in save local storage');
    }
  }

  const getItem = async (key: string) => {
    try {
      const item = await AsyncStorage.getItem(key)

      return item
    } catch (error) {
      console.log(error, 'error in getItem local storage');
    }
  }

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.log(error, 'error in removeItem local storage');
    }
  }

  return {
    save,
    getItem,
    removeItem
  }
}