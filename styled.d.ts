import 'styled-components';
import { Theme } from './src/models/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
