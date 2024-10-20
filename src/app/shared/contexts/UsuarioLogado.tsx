import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nome, setNome] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setNome("João");
    }, 1000);
  });

  const handleLogout = useCallback(() => {
    console.log("Logout executado");
  }, []);

  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: nome, logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
