import { useEffect, useState } from "react";
import { api } from "../api";

interface IParams {
  limit: number;
  skip: number;
}

export const useFetch = <T>(endpoint: string, params?: IParams) => {
  const [data, setData] = useState<T | null>(null);
  const [err, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await api.get(endpoint, { params });
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [endpoint, JSON.stringify(params)]);

  return { data, err, loading };
};
