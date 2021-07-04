import React from "react";

import { StatusBar } from "expo-status-bar";

import Home from "./src/pages/Home";
import UserProvider from "./src/context/UserProvider";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#21d17f" />

      <UserProvider>
        <Home />
      </UserProvider>
    </>
  );
}
