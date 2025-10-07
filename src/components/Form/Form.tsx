import { useState } from 'react';
import './Form.scss';

export const Form = ({ createNewToDo }: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('');

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text) {
      createNewToDo(text);
      setText('');
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={e => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
