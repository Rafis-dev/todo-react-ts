// ThemeProviderWrapper.tsx
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { GlobalStyle } from '../../styles/GlobalStyle';

export const ThemeProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useSelector((state: RootState) => state.themeList.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
