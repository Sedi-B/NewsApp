import React, { useEffect } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../newsAction";
import NewsList from "./NewsList";

const Homepage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <Text style={{ color: "red", alignSelf: "center" }}>
          Error: {error}
        </Text>
      ) : (
        <>
          <NewsList news={news} />
          {/* Add more UI components or features as needed */}
        </>
      )}
    </SafeAreaView>
  );
};

export default Homepage;
