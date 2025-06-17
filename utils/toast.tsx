"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Toast = { type: "success" | "error"; message: string } | undefined;

interface ToastContextType {
  toast: Toast;
  setToast: (lang: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<Toast>(undefined);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(undefined);
      }, 3000);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      <>
        {toast && (
          <div
            className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white 
    ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
    transition-opacity duration-300 z-99`}
          >
            {toast.message}
          </div>
        )}
      </>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
