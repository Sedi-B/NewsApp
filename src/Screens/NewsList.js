import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewsList = ({ news }) => {
  const navigation = useNavigation();

  const navigateToNewsFeed = (item) => {
    navigation.navigate("NewsFeed", item);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Health",
    "Politics",
    "Science",
    "Education",
    "Sports",
  ];

  const renderCategoryItem = (item) => (
    <Pressable
      style={{
        borderRadius: 15,
        padding: 10,
        margin: 5,
        backgroundColor: selectedCategory === item ? "gray" : "transparent",
      }}
      onPress={() => setSelectedCategory(item)}
    >
      <Text
        style={{
          color: selectedCategory === item ? "black" : "white",
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        {item}
      </Text>
    </Pressable>
  );

  const filteredNews = news.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (item.title.includes(searchQuery) || item.url.includes(searchQuery)),
    (item) =>
      (selectedCategory === "Health" || item.category === selectedCategory) &&
      (item.title.includes(searchQuery) || item.url.includes(searchQuery))
  );

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToNewsFeed(item)}
    >
      <ImageBackground
        source={{ uri: item.urlToImage }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.url}>{item.url}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#808080",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: 20,
          marginBottom: 5,
          fontWeight: "900",
          fontSize: 25,
        }}
      >
        SEDIE UPDATES
      </Text>
      <TextInput
        style={{
          width: 400,
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
          borderRadius: 20,
        }}
        placeholder="Search news"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={{ height: 80 }}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => renderCategoryItem(item)}
          horizontal
          showsHorizontalScrollIndicator={true}
        />
      </View>
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.title}
        renderItem={renderNewsItem}
      />
      <View style={{ margin: 10 }}>
        <Pressable
          style={{
            paddingHorizontal: 5,
            borderRadius: 15,
            backgroundColor: "black",
            margin: 10,
          }}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text
            style={{
              fontSize: 15,
              padding: 5,
              color: "white",
              alignSelf: "center",
            }}
          >
            Back
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
  },
  imageBackground: {
    width: 450,
    height: 200,
    justifyContent: "flex-end",
    padding: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  url: {
    color: "blue",
  },
});

export default NewsList;
