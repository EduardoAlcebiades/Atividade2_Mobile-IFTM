import React, { memo, useContext } from "react";

import { StyleSheet, View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import FiIcon from "@expo/vector-icons/Feather";

import { User, UserContext } from "../context/UserContext";

export interface NumberCardProps {
  user: User;
}

const NumberCard: React.FC<NumberCardProps> = ({ user }) => {
  const { deleteUser } = useContext(UserContext);

  function handleDelete() {
    deleteUser(user.id, (err) => {
      if (err) {
        Alert.alert("Erro", "Ocorreu um erro ao salvar os dados");

        console.log(err);
      }
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.infoText, styles.infoTitle]}>{user.name}</Text>
        <Text style={styles.infoText}>{user.phone}</Text>
      </View>

      <RectButton style={styles.button} onPress={handleDelete}>
        <FiIcon name="trash" size={18} color="#ffffff" />
      </RectButton>
    </View>
  );
};

export default memo(NumberCard);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 4,
  },
  info: {
    maxWidth: "90%",
  },
  infoTitle: {
    fontWeight: "bold",
  },
  infoText: {
    color: "#555555",
    fontSize: 15,
  },
  button: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#f83a63",
    opacity: 0.9,
  },
});
