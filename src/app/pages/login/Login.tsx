import React, { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "../components/InputLogin";
import { ButtonLogin } from "../components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const { nomeDoUsuario } = useUsuarioLogado();

  const [senha, setSenha] = useState("");
  const [email, setEmail] = React.useState<string>("");

  const emailLength = useMemo(() => {
    console.log();
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <p>{nomeDoUsuario}</p>

        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue as string)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="Senha"
          type="password"
          value={senha}
          ref={inputPasswordRef}
          onChange={(newValue) => setSenha(newValue as string)}
        />

        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>

        <ButtonLogin type="button" onClick={handleEntrar}>
          Cadastrar-se
        </ButtonLogin>
      </form>
    </div>
  );
};
