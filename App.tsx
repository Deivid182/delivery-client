import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/presentation/views/home/home";
import RegisterScreen from "./src/presentation/views/register/register";
import RolesScreen from "./src/presentation/views/roles/roles";
import AdminTabsNavigator from "./src/presentation/navigator/admin-tabs-navigator";
import ClientTabsNavigator from "./src/presentation/navigator/client-tabs-navigator";
import ProfileUpdateScreen from "./src/presentation/views/profile/update/profile-update";
import { User } from "./src/domain/entities/User";
import { UserProvider } from "./src/presentation/context/user-context";

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Roles: undefined;
  ClientTabsNavigator: undefined;
  AdminTabsNavigator: undefined;
  ProfileUpdateScreen: {
    user: User;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Register"
            component={RegisterScreen}
          />

          <Stack.Screen
            name="AdminTabsNavigator"
            component={AdminTabsNavigator}
          />
          <Stack.Screen
            name="ClientTabsNavigator"
            component={ClientTabsNavigator}
          />

          <Stack.Screen
            name="ProfileUpdateScreen"
            component={ProfileUpdateScreen}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Roles"
            component={RolesScreen}
          />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
