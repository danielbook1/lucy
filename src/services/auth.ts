import apiClient from "./api-client";
import { RegisterUser } from "@/models";

export const authenticate = async (username: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  await apiClient.post("/auth/token", formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const register = async (user: RegisterUser) => {
  await apiClient.post("/auth/register", user, { withCredentials: true });
};
