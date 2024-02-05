import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminCategoryListScreen from "../views/admin/category/list/category-list";
import AdminOrderListScreen from "../views/admin/order/list/category-list";
import ProfileInfoScreen from "../views/profile/info/profile-info";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminCategoryListScreen"
        component={AdminCategoryListScreen}
        options={{
          title: "Categories",
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/list.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AdminOrderListScreen"
        component={AdminOrderListScreen}
        options={{
          title: "Orders",
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/orders.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/user_menu.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
