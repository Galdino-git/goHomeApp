import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Context as LoginContext } from "../context/LoginContext";

const CustomDrawer = (props) => {
  const { signout } = useContext(LoginContext);
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 150,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/icon.png")}
            style={{ height: 120, width: 120, borderRadius: 60 }}
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
    </>
  );
};

export default CustomDrawer;
