import { Profile } from "./profile";
import React from "react";

export const AuthWrapper = () => {
  return localStorage.getItem("token") ? (
    <Navigate to="/login" replace />
  ) : (
    <Profile />
  );
};
