import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { ToDoListProps } from '../../models/todo-item';
import {
  TodoListCompleted,
  TodoListContainer,
  TodoListNotCompleted,
} from './ToDoListItem/ToDoList.styled';

export const ToDoList = ({
  todos,
  completeToDo,
  deleteToDo,
  updateToDo,
}: ToDoListProps) => {
  const checkedList = () => {
    return todos
      .filter(item => !item.isDone)
      .map(item => {
        return (
          <ToDoListItem
            key={item.id}
            toDoListItem={item}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
          />
        );
      });
  };

  const uncheckedList = () => {
    return todos
      .filter(item => item.isDone)
      .map(item => {
        return (
          <ToDoListItem
            key={item.id}
            toDoListItem={item}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
          />
        );
      });
  };

  return (
    <TodoListContainer>
      <TodoListNotCompleted>{checkedList()}</TodoListNotCompleted>

      <TodoListCompleted>{uncheckedList()}</TodoListCompleted>
    </TodoListContainer>
  );
};
