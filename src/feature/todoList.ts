import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDo } from '../models/todo-item';
import { v4 as uuidv4 } from 'uuid';

export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: uuidv4(),
        text: action.payload,
        isDone: false,
        edit: false,
      };
      state.todos = [...state.todos, newToDo];
    },

    completeAction: (state, action: PayloadAction<ToDo>) => {
      const newToDos = state.todos.map(item => {
        if (item.id === action.payload.id) {
          item.isDone = !item.isDone;
        }
        return item;
      });

      state.todos = newToDos;
    },

    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newToDos = state.todos.filter(
        item => item.id !== action.payload.id
      );
      state.todos = newToDos;
    },

    updateAction: (state, action: PayloadAction<ToDo>) => {
      state.todos = state.todos.map(item =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    },
  },
});

export const { createAction, completeAction, deleteAction, updateAction } =
  todoSlice.actions;

export default todoSlice.reducer;
