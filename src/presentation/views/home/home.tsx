import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../App';
import Button from '../../components/button';
import Input from '../../components/input';
import { COLORS } from '../../theme/app-theme';
import useHomeViewModel from './view-model';

interface Props extends StackScreenProps<RootStackParamList, 'Home'>{}

export default function HomeScreen({ navigation, route }: Props) {

  const { email, password, onChange, errorMessage, login, user, isLoading } = useHomeViewModel();

  useEffect(() => {
    if(errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

  useEffect(() => {
    if(user?.id !== null && user?.id !== undefined && user?.id !== 0) {
      user.roles?.length! > 1 ? navigation.replace('Roles') : navigation.replace('ClientTabsNavigator');
    }
  }, [user])

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../../../assets/logo.png')}
        />
        <Text style={styles.logoText}>
          Food App
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>
          Sign in
        </Text>
        <Input
          placeholder='Email'
          keyboardType='email-address'
          image={require('../../../../assets/email.png')}
          property={'email'}
          value={email}
          onChange={onChange}
        />
        <Input
          placeholder='Password'
          keyboardType='default'
          image={require('../../../../assets/password.png')}
          value={password}
          property={'password'}
          onChange={onChange}
          secureTextEntry
        />
        <View style={{ marginTop: 20 }}>
          <Button
            disabled={isLoading}
            onPress={() => login()}
          >
            <Text style={styles.textButton}>
              Login
            </Text>
          </Button>
        </View>
        <View style={styles.formRegister}>
          <Text>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerText}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    bottom: '30%'
  },
  logoContainer: {
    position: 'absolute',
    top: '15%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  form: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    gap: 15
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  formIcon: {
    width: 25,
    height: 25
  },
  formRegister: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  registerText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'orange'
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1.5
  }
});
