import { ToDoListItemProps } from '../../../models/todo-item';
import { useState, useRef, useEffect } from 'react';
import {
  ToDoItemButton,
  ToDoItemControls,
  ToDoItemText,
  ToDoItemWrapper,
} from './ToDoListItem.styled';
import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';
import pencil from '../../../assets/images/pencil.png';
import activePencil from '../../../assets/images/edit-pencil.png';

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
    <ToDoItemWrapper
      ref={listItemRef}
      className={toDoListItem.isDone ? 'checked' : ''}
    >
      {edit ? (
        <input
          ref={editRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <ToDoItemText>{toDoListItem.text}</ToDoItemText>
      )}
      <ToDoItemControls>
        <ToDoItemButton
          icon={edit ? activePencil : pencil}
          style={{ display: toDoListItem.isDone ? 'none' : '' }}
          onClick={e => {
            if (edit) {
              finishEdit();
            } else {
              setEdit(prevEdit => !prevEdit);
            }
          }}
        ></ToDoItemButton>
        <ToDoItemButton
          icon={trashIcon}
          onClick={() => {
            deleteToDo(toDoListItem);
          }}
        ></ToDoItemButton>

        <ToDoItemButton
          icon={toDoListItem.isDone ? checkIcon : uncheckIcon}
          disabled={edit}
          style={{
            opacity: edit ? '25%' : '100%',
            pointerEvents: edit ? 'none' : 'auto',
          }}
          onClick={() => {
            completeToDo(toDoListItem);
          }}
        ></ToDoItemButton>
      </ToDoItemControls>
    </ToDoItemWrapper>
  );
};
