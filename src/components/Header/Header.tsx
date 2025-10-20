import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderBlock, ThemeHeaderBtn } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeAction } from '../../feature/themeList';
import darkModeIcon from '../../assets/images/dark.png';
import lightModeIcon from '../../assets/images/light.png';
import { RootState } from '../../store';

export const Header = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);
  const dispatch = useDispatch();

  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'active link' : 'link';
  };

  const toggleButton: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    top: '60%',
    transform: 'translateY(-50%)',
  };

  return (
    <HeaderBlock>
      <HeaderContainer>
        <NavLink to="/" className={getActiveClass} replace>
          Главная
        </NavLink>
        <NavLink to="/list" className={getActiveClass} replace>
          Список
        </NavLink>
        <div style={toggleButton}>
          <ThemeHeaderBtn
            onClick={() => dispatch(toggleThemeAction())}
            icon={theme.name === 'light' ? darkModeIcon : lightModeIcon}
          />
        </div>
      </HeaderContainer>
    </HeaderBlock>
  );
};
