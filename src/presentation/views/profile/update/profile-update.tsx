import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { RootStackParamList } from "../../../../../App";
import Button from "../../../components/button";
import Input from "../../../components/input";
import ModalPickImage from "../../../components/modal-pick-image";
import { COLORS } from "../../../theme/app-theme";
import useUpdateProfileViewModel from "./view-model";

interface Props
  extends StackScreenProps<RootStackParamList, "ProfileUpdateScreen"> {}

export default function ProfileUpdateScreen({ navigation, route }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const { user } = route.params;
  console.log(user);

  const {
    lastName,
    firstName,
    phone,
    image,
    onChange,
    errorMessage,
    onUpload,
    isLoading,
    update,
    onCameraOpen,
  } = useUpdateProfileViewModel(user);

  useEffect(() => {
    if (errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../../assets/bg_profile.jpeg")}
      />

      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          {!image ? (
            <Image style={styles.logoImage} source={{ uri: user?.image }} />
          ) : (
            <Image
              style={styles.logoImage}
              source={{ uri: image }}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.logoText}>Choose a picture</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Register</Text>
          <Input
            placeholder="First Name"
            keyboardType="default"
            image={require("../../../../../assets/user.png")}
            property={"firstName"}
            value={firstName}
            onChange={onChange}
          />
          <Input
            placeholder="Last Name"
            keyboardType="default"
            image={require("../../../../../assets/my_user.png")}
            property="lastName"
            value={lastName}
            onChange={onChange}
          />
          <Input
            placeholder="Phone Number"
            keyboardType="number-pad"
            image={require("../../../../../assets/phone.png")}
            property="phone"
            value={phone}
            onChange={onChange}
          />
          <View style={{ marginTop: 20 }}>
            <Button onPress={() => {
              update();
              navigation.goBack();
            }}>
              <Text style={styles.textButton}>Update</Text>
              {isLoading ? <ActivityIndicator color="white" /> : null}
            </Button>
          </View>
          {/* <View style={styles.formRegister}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.registerText}>Log in</Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={onUpload}
        openCamera={onCameraOpen}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
    bottom: "30%",
  },
  logoContainer: {
    position: "absolute",
    top: "5%",
    alignSelf: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    marginRight: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  form: {
    width: "100%",
    height: "45%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    gap: 15,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#aaa",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  formIcon: {
    width: 25,
    height: 25,
  },
  formRegister: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  registerText: {
    color: COLORS.primary,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "orange",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    letterSpacing: 1.5,
  },
});
