import React, { useContext, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Context } from "../store/appContext";
import { Login } from "./login";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.privado();
  }, []);
  return (
    <h1>
      {store.permiso ? (
        `Access granted ${store.user}`
      ) : (
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      )}
    </h1>
  );
};
