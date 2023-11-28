import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import front from "../../assets/news.png";
export default function Welcome({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#DEE6F2",
      }}
    >
      <View
        style={{
          marginTop: 20,
          height: 300,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 48, fontWeight: 900, alignSelf: "center" }}>
          SEDINEWS
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 500, alignSelf: "center" }}>
          Pride ourselves in keeping you updated
        </Text>
      </View>
      <ImageBackground
        source={front}
        resizeMode="cover"
        style={{
          marginTop: 20,
          height: 200,
          justifyContent: "center",
        }}
      ></ImageBackground>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 300,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 15,
            width: "60%",
          }}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              alignSelf: "center",
            }}
          >
            Go to News
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
