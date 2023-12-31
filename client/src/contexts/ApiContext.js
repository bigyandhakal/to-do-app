import React, { useContext, createContext } from "react";
import useApi from "../hooks/useApi";

export const ApiContext = createContext(null);

export default function ApiContextProvider({ children }) {
  const api = useApi();
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error("Context must be provided");
  return context;
};
