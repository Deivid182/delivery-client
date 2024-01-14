import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../../../../../App';
import Button from '../../../components/button';
import userProfileInfoModel from './view-model';

interface Props extends StackScreenProps<RootStackParamList, 'Profile'> {}

const ProfileInfoScreen = ({navigation, route}: Props) => {

  const { removeSession } = userProfileInfoModel();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20}}>
      <Button 
        onPress={() => {
        removeSession();
        navigation.navigate('Home');
      }}>
        <Text style={styles.textButton}>
          Log Out
        </Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1.5
  }
})

export default ProfileInfoScreen