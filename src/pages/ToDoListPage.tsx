// import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { createAction, updateAction, deleteAction } from '../feature/todoList';

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const notifyTaskCreated = () => toast.info('Добавлена новая задача');
  const notifyTaskDeleted = () => toast.error('Задача удалена');
  const notifyTaskCompleted = () => toast.success('Задача завершена');
  const notifyTaskRestored = () =>
    toast.success('Задача возвращена в незавершенные');

  const notifyStatusChange = (toDoItem: ToDo) => {
    if (toDoItem.isDone) {
      notifyTaskRestored();
    } else {
      notifyTaskCompleted();
    }
  };

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
    notifyTaskCreated();
  };

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
    notifyStatusChange(toDoItem);
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
    notifyTaskDeleted();
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={true}
      />
    </>
  );
};
