import { useEffect, useState } from 'react';
import { ToDo } from '../models/todo-item';
import { useNavigate, useParams } from 'react-router-dom';

export const ItemDescription = ({ todos }: { todos: ToDo[] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const searchTodo = todos.find(todo => String(todo.id) === id);
    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate('/404');
    }
  }, [id, navigate, todos]);

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};
