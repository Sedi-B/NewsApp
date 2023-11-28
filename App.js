import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/store";
import Homepage from "./src/Screens/Homepage";
import { StyleSheet } from "react-native";
import NewsFeed from "./src/Screens/NewsFeed";
import Welcome from "./src/Screens/Welcome";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsFeed"
            component={NewsFeed}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
