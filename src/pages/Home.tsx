import React, { useContext } from "react";

import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { UserContext } from "../context/UserContext";

import NumberCard from "../components/NumberCard";
import Header from "../components/Header";

function Home() {
  const { users } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView style={[styles.list]}>
        {users.map((user) => (
          <NumberCard key={user.id} user={user} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#f0f0f7",
  },
  list: {
    flex: 1,
    paddingHorizontal: 25,
    marginVertical: 25,
  },
});
