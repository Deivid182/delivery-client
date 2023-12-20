import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { RootStackParamList } from '../../../../../App';
import Button from '../../../components/button';
import userProfileInfoModel from './user-profile-info-view-model';

interface Props extends StackScreenProps<RootStackParamList, 'Profile'> {}

const ProfileInfoScreen = ({navigation, route}: Props) => {

  const { removeSession } = userProfileInfoModel();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20}}>
      <Button text="Logout" onPress={() => {
        removeSession();
        navigation.navigate('Home');
      }} />
    </View>
  )
}

export default ProfileInfoScreen