import 'styled-components';
import type { StyledTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
