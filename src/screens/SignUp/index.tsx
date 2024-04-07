import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import * as Styled from './styles';

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const notifyErr = (err: any) => toast.error(err);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (name === '') {
      return notifyErr('Preencha o nome')
    }

    if (email === '') {
      return notifyErr('Preencha o email')
    }

    if (password === '') {
      return notifyErr('Preencha a senha')
    }


    setIsValidEmail(emailRegex.test(email));
    if (isValidEmail === false) {
      return notifyErr('Preencha o e-mail corretamente')
    }

    try {
      const response = await axios.post('http://localhost:3000/user',
        JSON.stringify({ name, email, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      if (response?.status === 201) {
        await handleGoLogin();
      }
    } catch (err: any) {
      if (!err?.response) {
        notifyErr('Erro ao acessar o servidor')
      } else if (err?.response?.status === 400) {
        notifyErr('A senha deve conter entre 4 e 20 caracteres. Com letra maiúscula e minúscula e ao menos um caractere especial.')
      } else if (err?.response?.status === 401) {
        notifyErr('Usuario ou senha invalidos')
      } else if (err?.response?.status === 500) {
        notifyErr('E-mail já cadastrado')
      }
    }
  };

  function handleGoLogin() {
    navigate("/");
  }

  return (
    <Styled.Container>
      <Styled.ContainerLoginForm>
        <Styled.TitleLogin>SignUp</Styled.TitleLogin>
        <Styled.FormLogin>
          <Styled.InputBox
            type="text"
            name="name"
            placeholder="Nome*"
            required
            maxLength={100}
            onChange={e => setName(e.target.value)}
          />
          <Styled.InputBox
            maxLength={150}
            type="email"
            name="email"
            placeholder="Email*"
            required
            onChange={handleEmailChange}
          />
          <Styled.InputBox
            type="password"
            name="password"
            maxLength={255}
            placeholder="Password*"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <Styled.ButtonsContainer>
            <Styled.ButtonSend
              type="submit"
              onClick={(e) => handleSignUp(e)}
            >
              Criar conta
            </Styled.ButtonSend>
            <Styled.ButtonSend
              outline
              type="submit"
              onClick={handleGoLogin}
            >
              Ir para Login
            </Styled.ButtonSend>
          </Styled.ButtonsContainer>
        </Styled.FormLogin>
      </Styled.ContainerLoginForm>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Styled.Container>
  )
}