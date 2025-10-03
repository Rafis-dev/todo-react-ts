import './ToDoListItem.scss';
import { ToDoListItemProps } from '../../../models/todo-item';

export const ToDoListItem = ({
  toDoListItem,
  updateToDo,
  deleteToDo,
}: ToDoListItemProps) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{toDoListItem.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => {
            deleteToDo(toDoListItem);
          }}
        ></button>
        <button
          className={toDoListItem.isDone ? 'btn-check' : 'btn-uncheck'}
          onClick={() => {
            updateToDo(toDoListItem);
          }}
        ></button>
      </div>
    </li>
  );
};
