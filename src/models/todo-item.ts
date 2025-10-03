export interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
}

export interface ToDoListProps {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}

export interface ToDoListItemProps {
  toDoListItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}
