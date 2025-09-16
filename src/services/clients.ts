import apiClient from "./api-client";
import { CreateClient } from "@/models";

export const createClient = async (client: CreateClient) => {
  await apiClient.post("/client", client, { withCredentials: true });
};
