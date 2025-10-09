import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderBlock } from './Header.styled';

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'active link' : 'link';
  };

  return (
    <HeaderBlock>
      <HeaderContainer>
        <NavLink to="/" className={getActiveClass}>
          Главная
        </NavLink>
        <NavLink to="/list" className={getActiveClass}>
          Список
        </NavLink>
      </HeaderContainer>
    </HeaderBlock>
  );
};
