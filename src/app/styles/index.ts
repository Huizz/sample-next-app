import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { media, state } from './utils';

interface IThemeInterface {
  primaryColor: string;
};

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { 
  styled, 
  css, 
  keyframes, 
  createGlobalStyle, 
  ThemeProvider, 
  media, 
  state 
};