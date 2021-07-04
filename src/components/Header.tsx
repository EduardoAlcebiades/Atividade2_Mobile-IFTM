import React, { useCallback, useState, useContext } from "react";

import { RectButton } from "react-native-gesture-handler";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
  Alert,
} from "react-native";

import { UserContext, UserForm } from "../context/UserContext";

const Header: React.FC = () => {
  const { saveUser } = useContext(UserContext);

  const [form, setForm] = useState<UserForm>({ name: "", phone: "" });

  const phoneMask = useCallback((value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{1,2})(\d{1,5})(\d{1,4})/g, "($1) $2-$3");
  }, []);

  const handleInputChange = useCallback(
    (name: keyof UserForm, value: string) => {
      if (name === "phone") value = phoneMask(value);

      setForm((prev) => ({ ...prev, [name]: value }));
    },

    [setForm, phoneMask]
  );

  const handleSubmit = useCallback(() => {
    Keyboard.dismiss();

    saveUser(form, (err) => {
      if (err) {
        Alert.alert("Erro", "Ocorreu um erro ao salvar os dados");

        console.log(err);
      } else setForm({ name: "", phone: "" });
    });
  }, [form, setForm]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.inputText}
        placeholder="Nome"
        value={form.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Telefone"
        keyboardType="number-pad"
        maxLength={15}
        value={form.phone}
        onChangeText={(value) => handleInputChange("phone", value)}
      />

      <RectButton style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </RectButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#21d17f",
    paddingHorizontal: 50,
    paddingTop: 25,
    paddingBottom: 15,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  inputText: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    height: 50,
    padding: 15,
    borderRadius: 4,
  },
  saveButton: {
    alignSelf: "flex-end",
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 20,
  },
});
