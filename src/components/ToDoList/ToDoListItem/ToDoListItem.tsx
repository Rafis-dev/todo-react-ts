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
  const listItemRef = useRef<HTMLLIElement>(null);

  const finishEdit = () => {
    setEdit(false);
    // Если текст не изменился — отменяем редактирование
    if (text.trim() === toDoListItem.text.trim()) {
      setText(toDoListItem.text); // возвращаем оригинальный текст на всякий случай
      return;
    }

    // Иначе обновляем задачу
    updateToDo({ ...toDoListItem, text: text.trim() });
  };

  // Обработчик нажатия клавиши
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      finishEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setEdit(false);
      setText(toDoListItem.text);
    }
  };

  // Проверяем клик вне поля редактирования
  const handleClickOutside = (e: MouseEvent) => {
    const listEl = listItemRef.current;

    if (listEl && !listEl.contains(e.target as Node)) {
      finishEdit();
    }
  };

  useEffect(() => {
    if (edit && editRef.current) {
      editRef.current.focus(); // Фокусируемся на элементе, если edit = true
    }
  }, [edit]); // Будет выполняться каждый раз, когда edit изменяется

  useEffect(() => {
    if (!edit || !listItemRef.current) return;

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [edit, listItemRef, text]);

  return (
    <li
      ref={listItemRef}
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
          onClick={e => {
            e.stopPropagation();
            if (edit) {
              finishEdit();
            } else {
              setEdit(prevEdit => !prevEdit);
            }
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
          style={{
            opacity: edit ? '25%' : '100%',
            pointerEvents: edit ? 'none' : 'auto',
          }}
          onClick={() => {
            completeToDo(toDoListItem);
          }}
        ></button>
      </div>
    </li>
  );
};
