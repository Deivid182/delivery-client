import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../../../App";
import Button from "../../../components/button";
import userProfileInfoModel from "./view-model";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../theme/app-theme";

const ProfileInfoScreen = () => {
  const { removeSession, user } = userProfileInfoModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../../assets/bg_profile.jpeg")}
      />

      <View style={styles.profileImageContainer}>
        <TouchableOpacity
          
        >
          <Image style={styles.profileImage} source={{ uri: user?.image }} />
        </TouchableOpacity>
        <Button
          onPress={() => {
            removeSession();
            navigation.replace("Home");
          }}
          color="#fff"
          rounded
        >
          <Image
            source={require("../../../../../assets/logout.png")}
            style={styles.logoutImage}
          />
        </Button>
      </View>
      <View style={styles.form}>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/user.png")}
            style={styles.formImage}
          />
          <View>
            <Text>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text style={styles.formTextDesc}>Username</Text>
          </View>
        </View>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/email.png")}
            style={styles.formImage}
          />
          <View>
            <Text>{user?.email}</Text>
            <Text style={styles.formTextDesc}>Email</Text>
          </View>
        </View>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/phone.png")}
            style={styles.formImage}
          />
          <View>
            <Text>{user?.phone}</Text>
            <Text style={styles.formTextDesc}>Phone Number</Text>
          </View>
        </View>
        <Button
          onPress={() => {
            navigation.navigate("ProfileUpdateScreen", {
              user: user!,
            });
          }}
          color={COLORS.secondary}
        >
          <Text style={styles.textButton}>Update Profile</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
    bottom: "30%",
  },
  profileImageContainer: {
    position: "absolute",
    top: "15%",
    alignSelf: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginBottom: 10,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  logoutImage: {
    width: 40,
    height: 40,
  },
  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    gap: 20,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  formImage: {
    width: 20,
    height: 20,
  },
  formInfo: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  formTextDesc: {
    fontSize: 12,
    color: "gray",
  },
});

export default ProfileInfoScreen;
