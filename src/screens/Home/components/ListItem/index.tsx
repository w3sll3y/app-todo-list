import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import * as Styled from './styles';

export function ListItem(props) {
  const notifyErr = (err) => toast.error(err);
  const [statusChild, setStatusChild] = useState(props.status);
  const token = localStorage.getItem('token');

  async function handleUpdateStatus(id: number, status: boolean) {
    try {
      await axios.put(`http://localhost:3000/task/${id}`, {
        status: !status,
      },
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${JSON.parse(token).token}`
          },
        },
      );
    } catch (err) {
      notifyErr("Erro buscar. Tente novamente.");
    }

    return setStatusChild(!status)
  }

  async function handleDelete(id: number) {
    try {
      await axios.delete(`http://localhost:3000/task/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${JSON.parse(token).token}`
          },
        },
      );
    } catch (err) {
      notifyErr("Erro buscar. Tente novamente.");
    }
    window.location.reload(false);
  }

  return (
    <Styled.Container>
      <Styled.TitleContainer status={statusChild}>
        {props?.title}
      </Styled.TitleContainer>
      <Styled.CheckboxContainer>
        <Checkbox onChange={() => handleUpdateStatus(props?.id, statusChild)} checked={statusChild} />
        <Styled.ButtonDelete onClick={() => handleDelete(props?.id)}>
          <DeleteIcon htmlColor='#ff7675' />
        </Styled.ButtonDelete>
      </Styled.CheckboxContainer>
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