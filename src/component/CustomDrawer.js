import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Context as LoginContext } from "../context/LoginContext";
import { FontAwesome5 } from "@expo/vector-icons";
import goHomeApi from "../api/goHomeAPI";

const CustomDrawer = (props) => {
  const { state, signout } = useContext(LoginContext);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    setPhoto(state.photoUri);
    console.log(state.photoUri);
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 200,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {photo ? null : (
            <>
              <FontAwesome5
                name="user-circle"
                size={150}
                color="black"
                style={{ marginBottom: 10 }}
              />
            </>
          )}
          {photo && (
            <>
              <Image
                source={{
                  uri:
                    "data/user/0/host.exp.exponent/cache/ExperienceData/%2540vinicius_galdino%252FgoHomeApp/ImagePicker/5fa04cc7-6360-4871-9f89-ebfd5f8e634c.jpg",
                }}
                style={{
                  width: 150,
                  height: 150,
                  alignItems: "center",
                  borderRadius: 100,
                  marginBottom: 10,
                }}
              />
            </>
          )}
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
