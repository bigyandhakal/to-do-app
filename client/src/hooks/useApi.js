import { useState, useCallback } from "react";
import axios from "axios";
import { URLS } from "../constants";

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      await axios.post(url, payload);
    } catch (error) {
      const err = error ? error.message : "Create API failed";
      setError(err);
    } finally {
      list({ url: URLS.TODOS });
      setLoading(false);
    }
  };
  const list = useCallback(async ({ url }) => {
    try {
      setLoading(true);
      const { data } = await axios(url);
      setData(data.data);
    } catch (error) {
      const err = error ? error.message : "List API failed";
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);
  const updateStatus = () => {};
  const deleteById = () => {};
  return { loading, error, data, create, list, updateStatus, deleteById };
}
