import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Switch,
  Text,
  View,
  TextInput,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function Switcher(props) {
  //Boton y desplegable
  const { texto, activateText } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState("Activar");
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const toggleSwitch = () => {
    if (isEnabled) {
      setText("Activar");
    } else {
      setText("Desactivar");
    }
    setIsEnabled((prevState) => !prevState);
    setShowAdditionalContent((prevState) => !prevState);
  };

  //Lista
  const [selected, setSelected] = React.useState("");
  const [isSelectListEnabled, setSelectListEnabled] = useState(true);

  const data = [
    { key: "1", value: "Día" },
    { key: "2", value: "Mes" },
    { key: "3", value: "Año" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>
          {text} {texto}
        </Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          trackColor={{ false: "white", true: "#4ed164" }}
          thumbColor={isEnabled ? "white" : "#767577"}
        />
      </View>

      {showAdditionalContent && (
        <View style={styles.addContent}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}> {activateText}</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese monto"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.selectListContainer}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              boxStyles={{ backgroundColor: "#f1f1f1" }}
              dropdownStyles={{ backgroundColor: "#f1f1f1" }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    color: "#f1f1f1",
    marginRight: 10,
    fontSize: 15,
  },
  addContent: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    color: "#f1f1f1",
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderBottomColor: "grey",
  },
  selectListContainer: {
    marginTop: 10,
  },
});
