import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import './ToDoList.scss';
import { ToDoListProps } from '../../models/todo-item';

export const ToDoList = ({
  todos,
  completeToDo,
  deleteToDo,
  updateToDo,
}: ToDoListProps) => {
  const checkedList = () => {
    return todos
      .filter(item => !item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem
            key={index}
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
      .map((item, index) => {
        return (
          <ToDoListItem
            key={index}
            toDoListItem={item}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
          />
        );
      });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{checkedList()}</ul>

      <ul className="todo-list completed">{uncheckedList()}</ul>
    </div>
  );
};
