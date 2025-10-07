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
  const editRef = useRef<HTMLLIElement>(null);

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

      const updatedText =
        editRef.current?.textContent?.trim() || toDoListItem.text;

      updateToDo({ ...toDoListItem, text: updatedText });
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setEdit(false);

      // Возвращаем старый текст в DOM
      if (editRef.current) {
        editRef.current.textContent = toDoListItem.text;
      }
    }
  };

  return (
    <li
      suppressContentEditableWarning={true}
      onKeyDown={handleKeyDown}
      className={`todo-list-item__wrapper ${
        toDoListItem.isDone ? 'checked' : ''
      }`}
    >
      <span ref={editRef} contentEditable={edit}>
        {toDoListItem.text}
      </span>
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
