import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/presentation/views/home/home';
import ProfileInfoScreen from './src/presentation/views/profile/info/profile-info';
import RegisterScreen from './src/presentation/views/register/register';
import RolesScreen from './src/presentation/views/roles/roles';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Profile: undefined;
  Roles: undefined;
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
          options={{
            headerShown: true,
          }}
          name="Profile" component={ProfileInfoScreen}
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