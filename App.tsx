import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/presentation/views/home/home';
import RegisterScreen from './src/presentation/views/register/register';
import RolesScreen from './src/presentation/views/roles/roles';
import AdminTabsNavigator from './src/presentation/navigator/admin-tabs-navigator';
import ClientTabsNavigator from './src/presentation/navigator/client-tabs-navigator';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Roles: undefined;
  ClientTabsNavigator: undefined;
  AdminTabsNavigator: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Register" component={RegisterScreen}
        />

        <Stack.Screen
          name="AdminTabsNavigator" component={AdminTabsNavigator}
        />
        <Stack.Screen
          name="ClientTabsNavigator" component={ClientTabsNavigator}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Roles" component={RolesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;