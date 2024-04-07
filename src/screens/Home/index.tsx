import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Styled from './styles';
import AddIcon from '@mui/icons-material/Add';
import { Header } from "./components/Header";
import axios from "axios";
import { ListItem } from "./components/ListItem";

export function Home() {
  const notifyErr = (err: any) => toast.error(err);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState('');
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  async function getTasks() {
    try {
      const response = await axios.get(`http://localhost:3000/task`,
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${JSON.parse(token).token}`
          },
        }
      );
      setData(response?.data);
    } catch (err) {
      notifyErr("Erro buscar tarefas. Tente novamente.");
    }
  }

  async function handleCreateTask() {
    if (inputData === '') {
      return notifyErr('Não é possível adicionar tarefa sem título')
    }
    const idToTask = JSON.parse(id).id
    const data = {
      title: inputData,
      createdBy: idToTask,
      status: false
    }
    try {
      const response = await axios.post('http://localhost:3000/task',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${JSON.parse(token).token}`
          },

        }
      );
      if (response?.status === 201) {
        setInputData('');
        window.location.reload();
      }
    } catch (err) {
      notifyErr('Erro ao logar, tente novamente')
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Styled.Container>
      <Header />
      <Styled.ContaninerInputType>
        <Styled.InputType
          placeholder="Adicione uma tarefa"
          onChange={e => setInputData(e.target.value)}
        />
        <Styled.SendButton onClick={handleCreateTask}>
          <AddIcon />
        </Styled.SendButton>
      </Styled.ContaninerInputType>
      {data?.length > 0 ? (
        <>
          <Styled.Title>
            Minhas tarefas
          </Styled.Title>
          <Styled.ListTasks>
            {data?.map((row) => (
              <ListItem
                id={row?.id}
                title={row?.title}
                status={row?.status}
              />
            ))}
          </Styled.ListTasks>
        </>
      ) : (
        <Styled.EmptyTask>
          <Styled.Title>
            Voce ainda não possui tarefas
          </Styled.Title>
        </Styled.EmptyTask>
      )}
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