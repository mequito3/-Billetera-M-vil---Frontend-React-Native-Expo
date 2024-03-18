import React from "react";
import { SafeAreaView, StyleSheet, Text, Button, View, FlatList } from "react-native";
import PlusScreen from "./PlusScreen";

const HomeScreen = ({ money, index }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#1a1a1a"}}>
      <View>
        <FlatList
          data={money}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <HomeScreen money={item} index={index} />
          )}
        />
      </View>
      <View >
        <Text> {money} </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;