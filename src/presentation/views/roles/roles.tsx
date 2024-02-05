import { View, FlatList, Text, Dimensions, StyleSheet } from "react-native";
import useRoleViewModel from "./view-model";
import RolesItem from "./components/item";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

interface Props extends StackScreenProps<RootStackParamList, 'Roles'> {}

const RolesScreen = ({ navigation }: Props) => {
  const [mode, setMode] = useState<'horizontal-stack' | 'vertical-stack' | undefined>('horizontal-stack');
  const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left');

  const { user } = useRoleViewModel();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <GestureHandlerRootView>
      <View>
        <Carousel
          loop
          width={width}
          height={height}
          autoPlay={false}
          data={user?.roles!}
          scrollAnimationDuration={1000}
          modeConfig={{
            snapDirection,
            stackInterval: 10,
          }}
          mode={mode}
          renderItem={({ item }) => (
            <RolesItem navigation={navigation} role={item} height={420} width={width} />
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default RolesScreen;
