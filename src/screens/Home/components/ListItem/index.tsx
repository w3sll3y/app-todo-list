import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import * as Styled from './styles';

type TaskProps = {
  id?: number | string | any,
  title: string,
  status: boolean
}

export function ListItem(Task: TaskProps) {
  const notifyErr = (err: any) => toast.error(err);
  const [statusChild, setStatusChild] = useState(Task.status);
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
    window.location.reload();
  }

  return (
    <Styled.Container status={statusChild}>
      <Styled.TitleContainer status={statusChild}>
        {Task?.title}
      </Styled.TitleContainer>
      <Styled.CheckboxContainer>
        <Checkbox onChange={() => handleUpdateStatus(Task?.id, statusChild)} checked={statusChild} />
        <Styled.ButtonDelete onClick={() => handleDelete(Task?.id)}>
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