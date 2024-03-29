import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { Role } from "../../../../domain/entities/Role"
import { COLORS } from "../../../theme/app-theme"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../../../../App"
interface Props { 
  role: Role
  height: number
  width: number
  navigation: StackNavigationProp<RootStackParamList, 'Roles'>
}

const RolesItem: React.FC<Props> = ({ role, height, width, navigation }) => {
  return (
    <TouchableOpacity
      style={{...styles.container, height: height, width: (width - 50)}}
      onPress={() => {
        console.log(role.name);
        if(role.name === 'RESTAURANT') {
          navigation.replace('AdminTabsNavigator')
        } else if(role.name === 'CLIENT') {
          navigation.replace('ClientTabsNavigator')
        }
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: role.image }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {role.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingBottom: 20,
    paddingHorizontal: 7
  },
  imageContainer :{
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 10
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1.5
  }
})

export default RolesItem