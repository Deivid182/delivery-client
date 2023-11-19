import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/presentation/views/home/home';
import RegisterScreen from './src/presentation/views/register/register';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
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
          name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;