import { ListItem } from '../components/ListItem/ListItem';
import { ToDo } from '../models/todo-item';

export const HomePage = ({ todos }: { todos: ToDo[] }) => {
  return (
    <div className="container">
      {todos.map((todo: ToDo, idx: number) => {
        return <ListItem todo={todo} key={idx} />;
      })}
    </div>
  );
};
