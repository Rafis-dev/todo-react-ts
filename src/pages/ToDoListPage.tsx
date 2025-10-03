import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';
import { ToastContainer, toast } from 'react-toastify';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const notifyTaskCreated = () => toast.info('Добавлена новая задача');
  const notifyTaskUpdated = () => toast.success('Задача обновлена');
  const notifyTaskDeleted = () => toast.error('Задача удалена');

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
    notifyTaskCreated();
  };

  const updateToDo = (toDoItem: ToDo) => {
    const newToDos = todos.map(item => {
      if (item.id === toDoItem.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    setTodos(newToDos);
    notifyTaskUpdated();
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const newToDos = todos.filter(item => item.id !== toDoItem.id);
    setTodos(newToDos);
    notifyTaskDeleted();
  };

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={true}
      />
    </>
  );
};
