import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { Client } from "@/models";

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchClients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get("/client/all/", {
        withCredentials: true,
      });
      setClients(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return { clients, loading, error, refresh: fetchClients };
};
