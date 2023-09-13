import { useState } from "react";
import axios from "axios";

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const create = () => {};
  const list = async ({ url }) => {
    try {
      setLoading(true);
      const {data} = await axios(url);
      setData(data.data)
    } catch (error) {
        const err = error ? error.message : "List API fetch failed"
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const updateStatus = () => {};
  const deleteById = () => {};
  return { loading, error, data, create, list, updateStatus, deleteById };
}
