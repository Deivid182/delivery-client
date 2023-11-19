import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../App';
import Button from '../../components/button';
import { COLORS } from '../../theme/app-theme';

export default function RegisterScreen() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../../../assets/user_image.png')}
        />
        <Text style={styles.logoText}>
          Choose a picture
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>
          Register
        </Text>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/user.png')}
          />
          <TextInput 
            placeholder='First Name'
            style={styles.formTextInput} 
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/my_user.png')}
          />
          <TextInput 
            placeholder='Last Name'
            style={styles.formTextInput} 
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/email.png')}
          />
          <TextInput 
            placeholder='Email'
            style={styles.formTextInput} 
            keyboardType='email-address'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/phone.png')}
          />
          <TextInput 
            placeholder='Phone Number'
            style={styles.formTextInput} 
            keyboardType='number-pad'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/password.png')}
          />
          <TextInput 
            placeholder='Password'
            style={styles.formTextInput} 
            keyboardType='default'
            secureTextEntry
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/confirm_password.png')}
          />
          <TextInput 
            placeholder='Confirm Password'
            style={styles.formTextInput} 
            keyboardType='default'
            secureTextEntry
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            text='Confirm'
            onPress={() => console.log('Login')}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.registerText}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
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
    top: '5%',
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
    marginRight: 10,
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
  }
});
