import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../../../../App';
import Button from '../../components/button';
import Input from '../../components/input';
import ModalPickImage from '../../components/modal-pick-image';
import { COLORS } from '../../theme/app-theme';
import useRegisterViewModel from './use-register-view-model';
export default function RegisterScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false)

  const {
    email,
    password,
    lastName,
    firstName,
    phone,
    passwordConfirmation,
    onChange,
    register,
    errorMessage,
    onUpload,
    file,
    onCameraOpen
  } = useRegisterViewModel();

  useEffect(() => {
    if(errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true)
          }}
        >
          {
            file?.uri === '' ? (
              <Image
                style={styles.logoImage}
                source={require('../../../../assets/user_image.png')}
              />
            ) : (
              <Image
                source={{ uri: file?.uri}}
                style={styles.logoImage}
              />
            )
          }
        </TouchableOpacity>
        <Text style={styles.logoText}>Choose a picture</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Register</Text>
          <Input
            placeholder='First Name'
            keyboardType='default'
            image={require('../../../../assets/user.png')}
            property={'firstName'}
            value={firstName}
            onChange={onChange}
          />
          <Input
            placeholder='Last Name'
            keyboardType='default'
            image={require('../../../../assets/my_user.png')}
            property='lastName'
            value={lastName}
            onChange={onChange}
          />
          <Input
            placeholder='Email Address'
            keyboardType='email-address'
            image={require('../../../../assets/email.png')}
            property='email'
            value={email}
            onChange={onChange}
          />
          <Input
            placeholder='Phone Number'
            keyboardType='number-pad'
            image={require('../../../../assets/phone.png')}
            property='phone'
            value={phone}
            onChange={onChange}
          />

          <Input
            placeholder='Password'
            keyboardType='default'
            image={require('../../../../assets/password.png')}
            property='password'
            value={password}
            onChange={onChange}
            secureTextEntry
          />

          <Input
            placeholder='Confirm Password'
            keyboardType='default'
            image={require('../../../../assets/confirm_password.png')}
            property='passwordConfirmation'
            value={passwordConfirmation}
            onChange={onChange}
            secureTextEntry
          />
          <View style={{ marginTop: 20 }}>
            <Button text='Confirm' onPress={() => register()} />
          </View>
          <View style={styles.formRegister}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.registerText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={onUpload}
        openCamera={onCameraOpen}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  logoContainer: {
    position: 'absolute',
    top: '5%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    marginRight: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  form: {
    width: '100%',
    height: '72%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    gap: 15,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  formIcon: {
    width: 25,
    height: 25,
  },
  formRegister: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  registerText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'orange',
  },
});
