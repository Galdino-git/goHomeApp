import React, { useContext } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Context as LoginContext } from "../context/LoginContext";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const { state, signout, getProfileByUserId } = useContext(LoginContext);

  return (
    <SafeAreaView style={styles.base}>
      <View
        style={{
          height: 200,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5
          name="user-circle"
          size={150}
          color="black"
          style={{ marginBottom: 10 }}
        />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="logout"
            size={60}
            color="black"
            style={{ paddingRight: 10, paddingBottom: 10 }}
            onPress={() => signout()}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
});

export default CustomDrawer;
