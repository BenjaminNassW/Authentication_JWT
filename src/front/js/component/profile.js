import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.privado(navigate);
  }, []);
  return (
    <h1>
      {store.permiso ? `Access granted ${store.user}` : "No tienes permiso"}
    </h1>
  );
};
