import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Buttons(props) {
    const { text, iconName } = props

  return (
    
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.touchButton, backgroundColor: "#0a0a0a" }}>
        {iconName && <MaterialIcons name={iconName} size={24} color="orange"/>}
        <Text style={styles.buttonText}>{ text }</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1a",
      },
  touchButton: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 22,
    marginVertical:10,
    borderRadius: 10,
    flexDirection:"row",
    paddingLeft:15
  },
  buttonText: {
    color: "#f1f1f1",
    textAlign: "left",
    alignContent:"center",
    fontSize: 18,
    paddingLeft:20
  },
});
