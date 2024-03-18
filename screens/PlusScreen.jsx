import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";

const screenHeight = Dimensions.get("screen").height;

const PlusScreen = () => {
  const [money, setMoney] = useState();
  const [desc, setDesc] = useState("");
  const [category, setCategory] = React.useState("");
  const [account, setAccount] = React.useState("");

  const cat = [
    { key: "1", value: "Sueldo" },
    { key: "2", value: "Extra" },
    { key: "3", value: "Otro" },
  ];
  const cuenta = [
    { key: "1", value: "Efectivo" },
    { key: "2", value: "Trabajo" },
    { key: "3", value: "Otro" },
  ];

  //btnGuardar

  const [reg, setReg] = useState([]);

  const saveReg = () => {
    setReg((currentReg) => [...currentReg, reg]);
    setReg("");
  };

  //fecha
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fecha;
    setFecha(currentDate);
  };
  const [fecha, setFecha] = useState(new Date());

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#1a1a1a" }}
    >
      <ScrollView>
        <View style={styles.viewsContainer}>
          <View style={[styles.selectListContainer, styles.inputContainer]}>
            <Text style={styles.text}>Fecha:   </Text>
            {Platform.OS === "ios" && (
              <DatePickerIOS
                style={styles.text}
                date={fecha}
                onDateChange={handleDateChange}
                mode="date"
              />
            )}
            {Platform.OS === "android" && (
              <TextInput
                style={[styles.text, styles.textInput]}
                placeholder="Fecha"
                value={fecha.toLocaleDateString()}
                editable={false}
              />
            )}
          </View>

          <View style={[styles.selectListContainer, styles.inputContainer]}>
            <Text style={styles.text}>Importe:</Text>
            <TextInput
              style={[styles.text, styles.textInput]}
              onChangeText={setMoney}
              value={money}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.selectListContainer}>
            <Text style={styles.text}>Categoría:</Text>
            <SelectList
              setSelected={(val) => setCategory(val)}
              data={cat}
              save="value"
              boxStyles={{ backgroundColor: "#007AFF" }}
              dropdownStyles={{ backgroundColor: "#007AFF" }}
              dropdownTextStyles={{ color: "#fff" }}
              inputStyles={{ color: "#fff" }}
            />
          </View>

          <View style={styles.selectListContainer}>
            <Text style={[styles.text]}>Cuenta:</Text>
            <SelectList
              setSelected={(val) => setAccount(val)}
              data={cuenta}
              save="value"
              boxStyles={{ backgroundColor: "#007AFF" }}
              dropdownStyles={{ backgroundColor: "#007AFF" }}
              dropdownTextStyles={{ color: "#fff" }}
              inputStyles={{ color: "#fff" }}
            />
          </View>

          <View style={[styles.selectListContainer, styles.inputContainer]}>
            <Text style={styles.text}>Descipción:</Text>
            <TextInput
              style={[styles.text, styles.textInput]}
              onChangeText={setDesc}
              value={desc}
            />
          </View>

          <View style={styles.selectListContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={saveReg}>
              <Text style={styles.text}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlusScreen;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  viewsContainer: {
    padding: 10,
    flexDirection: "column",
  },
  textInput: {
    color: "#f1f1f1",
    flex: 2,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#007AFF",
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  selectListContainer: {
    marginVertical: 20,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    alignSelf: "center",
    padding: 15,
    paddingHorizontal: 50,
  },
});
