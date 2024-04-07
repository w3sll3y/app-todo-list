import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styled from './styles';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const notifyErr = (err) => toast.error(err);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

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
      const response = await axios.post('http://localhost:3000/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      if (response?.status === 200) {
        const token = response?.data?.access_token;
        localStorage.setItem('token', JSON.stringify({ token }));
        await handleGoHome();
        window.location.reload(false);
      }
    } catch (err) {
      if (!err?.response) {
        notifyErr('Erro ao logar, tente novamente')
      } else if (err?.response?.status === 401) {
        notifyErr('Usuario ou senha invalidos')
      }
    }
  };

  function handleGoHome() {
    navigate("/home");
  }

  function handleGoSignUp() {
    navigate("/signup");
  }

  return (
    <Styled.Container>
      <Styled.ContainerLoginForm>
        <Styled.TitleLogin>Login</Styled.TitleLogin>
        <Styled.FormLogin>
          <Styled.InputBox
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleEmailChange}
          />
          <Styled.InputBox
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <Styled.ButtonsContainer>
            <Styled.ButtonSend
              type="submit"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </Styled.ButtonSend>
            <Styled.ButtonSend
              type="submit"
              onClick={handleGoSignUp}
              outline
            >
              Cadastrar-se
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