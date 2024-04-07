import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import * as Styled from './styles';
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

export function Header() {

  const notifyErr = (err) => toast.error(err);
  const [data, setData] = useState();
  const token = localStorage.getItem('token');

  async function getTasks() {
    try {
      const response = await axios.get(`http://localhost:3000/me`,
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${JSON.parse(token).token}`
          },
        }
      );
      setData(response?.data);
      const id = response?.data?.id;
      localStorage.setItem('id', JSON.stringify({ id }));
    } catch (err) {
      notifyErr("Erro buscar transações. Tente novamente.");
    }
  }
  useEffect(() => {
    getTasks();
  }, []);

  const navigate = useNavigate();

  function handleGoLogin() {
    navigate("/login");
  }
  const handleLoggout = async () => {
    localStorage.removeItem('token');
    await handleGoLogin();
    window.location.reload(false);
  };

  return (
    <Styled.Container>
      <Styled.MenuTextContainer>
        <p>
          Olá {data?.name}
        </p>
      </Styled.MenuTextContainer>
      <Styled.ButtonLoggoutContainer>
        <Styled.ButtonLoggout onClick={handleLoggout}>
          sair
        </Styled.ButtonLoggout>
      </Styled.ButtonLoggoutContainer>
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