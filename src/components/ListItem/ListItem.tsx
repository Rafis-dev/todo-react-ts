import { Link } from 'react-router-dom';
import { ToDo } from '../../models/todo-item';

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <>
      <Link
        className={`list-link ${todo.isDone ? 'done' : 'notDone'}`}
        to={`/list/${todo.id}`}
      >
        {todo.text}
      </Link>
    </>
  );
};
