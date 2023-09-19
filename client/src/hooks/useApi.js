import { useState, useCallback } from "react";
import axios from "axios";
import { URLS } from "../constants";

import { useToastContext } from "../contexts/ToastContext";

export default function useApi() {
  const { setShow, setToastMsg } = useToastContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      const result = await axios.post(url, payload);
      if (result) {
        setShow(true);
        setToastMsg((prev) => {
          return {
            ...prev,
            title: url.includes("todos")
              ? "New Todo Created"
              : "New Subtask Created",
            msg: `${payload.title} created`,
          };
        });
      }
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
      const err = error ? error.message : "List API fetch failed";
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStatus = async ({ url, id, payload }) => {
    try {
      const API_URL = url + "/" + id;
      setLoading(true);
      const result = await axios.patch(API_URL, payload);
      if (result) {
        setShow(true);
        setToastMsg((prev) => {
          return {
            ...prev,
            title: API_URL.includes("todos")
              ? "Todo Updated"
              : "Subtask Updated",
            msg: `Status changed to ${payload.status}`,
          };
        });
      }
    } catch (error) {
      const err = error ? error.message : "Update API failed";
      setError(err);
    } finally {
      list({ url: URLS.TODOS });
      setLoading(false);
    }
  };

  const deleteById = async ({ url, id }) => {
    try {
      const API_URL = url + "/" + id;
      setLoading(true);
      const result = await axios.delete(API_URL);
      if (result) {
        setShow(true);
        setToastMsg((prev) => {
          return {
            ...prev,
            title: API_URL.includes("todos")
              ? "Todo Deleted"
              : "Subtask Deleted",
            msg: `Deleted Successfully`,
          };
        });
      }
    } catch (error) {
      const err = error ? error.message : "Delete API failed";
      setError(err);
    } finally {
      list({ url: URLS.TODOS });
      setLoading(false);
    }
  };
  return { loading, error, data, create, list, updateStatus, deleteById };
}
