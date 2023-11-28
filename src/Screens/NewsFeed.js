import React from "react";
import { SafeAreaView, Text, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const NewsFeed = ({ route, navigation }) => {
  const { title, description, url, urlToImage } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#808080",
      }}
    >
      <Ionicons
        style={{ margin: 10 }}
        name="arrow-back-outline"
        size={40}
        color={"blue"}
        onPress={() => navigation.navigate("Homepage")}
      />

      <Text
        style={{
          marginBottom: 5,
          fontWeight: "bold",
          alignSelf: "flex-start",
          fontSize: 20,
        }}
      >
        {title}
      </Text>
      <Text style={{ fontWeight: "900", alignSelf: "center", fontSize: 18 }}>
        {description}
      </Text>
      <Image
        source={{ uri: urlToImage }}
        style={{
          width: 300,
          height: 300,
          margin: 10,
          borderRadius: 15,
          alignSelf: "center",
        }}
        resizeMode="cover"
      />
      <Pressable>
        <Text
          style={{
            color: "blue",
            fontWeight: "500",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          {url}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default NewsFeed;
