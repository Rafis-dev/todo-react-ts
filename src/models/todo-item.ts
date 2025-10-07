export interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
  edit: boolean;
}

export interface ToDoListProps {
  todos: ToDo[];
  completeToDo: Function;
  deleteToDo: Function;
  updateToDo: Function;
}

export interface ToDoListItemProps {
  toDoListItem: ToDo;
  completeToDo: Function;
  deleteToDo: Function;
  updateToDo: Function;
}
