import { View, FlatList, Text, Dimensions, StyleSheet } from 'react-native'
import useRoleViewModel from './view-model'
import RolesItem from './components/item'

const RolesScreen = () => {

  const { user } = useRoleViewModel()
  const width = Dimensions.get('window').width

  return (
    <View>
      <FlatList
        data={user?.roles}
        renderItem={({ item }) => <RolesItem role={item} height={420} width={width}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


export default RolesScreen