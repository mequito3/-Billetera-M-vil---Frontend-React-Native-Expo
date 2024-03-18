import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function SwitchP(props) {
  const { texto } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState("Activar");

  const toggleSwitch = () => {
    if (isEnabled) {
      setText("Activar");
    } else {
      setText("Desactivar");
    }
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.text}>{text} {texto} </Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        trackColor={{ false: "white", true: "#4ed164" }}
        thumbColor={isEnabled ? "white" : "#767577"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    viewContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      justifyContent: "space-between",
      backgroundColor: "black",
      borderBottomEndRadius:15,
      borderBottomStartRadius:15
    },
    text: {
      color: "#f1f1f1",
      marginRight: 10,
      fontSize: 15,
    },
});