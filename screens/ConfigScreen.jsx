import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Buttons from "../src/components/Buttons";

const ConfigScreen = () => {
  return (
    <ScrollView style = {{ backgroundColor: "#1a1a1a", flex:1}}>
      <SafeAreaView style={{flex: 1 }}>
        <Buttons text="Divisa" iconName="currency-exchange" />
        <Buttons text="Contraseña" iconName="lock-outline" />
        <Buttons text="Tema de la aplicación" iconName="color-lens" />
        <Buttons text="Modo oscuro" iconName="dark-mode" />
        <Buttons text="Copia de seguridad" iconName="cloud-upload" />
        <Buttons text="Información" iconName="info-outline" />
        <Buttons text="Dudas o sugerencias" iconName="comment" />
        <Buttons text="Política de privacidad" iconName="shield" />

      </SafeAreaView>
    </ScrollView>
  );
};
export default ConfigScreen;
