import React, { createContext, useState, useContext } from "react";

const ToastContext = createContext(null);

export default function ToastContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [toastMsg, setToastMsg] = useState({
    title: "",
    msg: "",
  });
  return (
    <ToastContextProvider value={{ show, setShow, toastMsg, setToastMsg }}>
      {children}
    </ToastContextProvider>
  );
}

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("Toast context must be wrapped with context provider");
  return context;
};
