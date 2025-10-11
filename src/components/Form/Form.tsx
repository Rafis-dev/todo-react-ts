import { useState } from 'react';
import {
  FormBlock,
  FormButton,
  FormInput,
  FormLabel,
  FormWrapper,
} from './Form.styled';
import plusIcon from '../../assets/images/plus.png';

export const Form = ({ createNewToDo }: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('');

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text.trim()) {
      createNewToDo(text);
      setText('');
    }
  };

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormInput
            value={text.trim() ? text : ''}
            type="text"
            onChange={e => setText(e.target.value)}
          />
          <FormButton icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
