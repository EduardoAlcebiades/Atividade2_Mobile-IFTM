import React, { useCallback, useEffect, useState } from "react";

import { Alert } from "react-native";

import { usersDB } from "../services/firebase";
import { User, UserContext, UserForm } from "./UserContext";

const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const saveUser = useCallback(
    (data: UserForm, callback?: (err: Error | null) => void) => {
      if (!data.name || data.phone.length < 14) {
        Alert.alert("Atenção", "Preencha todos os dados");

        return;
      }

      usersDB.push(data, (err) => callback && callback(err));
    },
    []
  );

  const deleteUser = useCallback(
    (userId: string, callback?: (err: Error | null) => void) => {
      usersDB.child(userId).remove((err) => callback && callback(err));
    },
    []
  );

  useEffect(() => {
    usersDB.on("value", (users) => {
      const data: User[] = [];

      users.forEach((user) => {
        data.push({
          id: String(user.key),
          name: user.val().name,
          phone: user.val().phone,
        });
      });

      setUsers(data);
    });
  }, [setUsers]);

  return (
    <UserContext.Provider value={{ users, saveUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
