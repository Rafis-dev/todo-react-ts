import './ToDoListItem.scss';
import { ToDoListItemProps } from '../../../models/todo-item';
import { useState, useRef, useEffect } from 'react';

export const ToDoListItem = ({
  toDoListItem,
  completeToDo,
  deleteToDo,
  updateToDo,
}: ToDoListItemProps) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(toDoListItem.text);
  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit && editRef.current) {
      editRef.current.focus(); // Фокусируемся на элементе, если edit = true
    }
  }, [edit]); // Будет выполняться каждый раз, когда edit изменяется

  // Обработчик нажатия клавиши
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEdit(false);
      updateToDo({ ...toDoListItem, text });
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setEdit(false);
      setText(toDoListItem.text);
    }
  };

  return (
    <li
      className={`todo-list-item__wrapper ${
        toDoListItem.isDone ? 'checked' : ''
      }`}
    >
      {edit ? (
        <input
          ref={editRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span>{toDoListItem.text}</span>
      )}
      <div className="todo-list-item__buttons">
        <button
          className={edit ? 'btn-edit-active' : 'btn-edit'}
          style={{ display: toDoListItem.isDone ? 'none' : '' }}
          onClick={() => {
            setEdit(prevEdit => !prevEdit);
          }}
        ></button>
        <button
          className="btn-trash"
          onClick={() => {
            deleteToDo(toDoListItem);
          }}
        ></button>

        <button
          className={toDoListItem.isDone ? 'btn-check' : 'btn-uncheck'}
          disabled={edit}
          style={{ opacity: edit ? '25%' : '' }}
          onClick={() => {
            completeToDo(toDoListItem);
          }}
        ></button>
      </div>
    </li>
  );
};
