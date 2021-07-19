// sobrescrevendo tipo de tema
// tornando exportável e intendido pela styled-Components do native
import 'styled-components';
import theme from './theme'

type themeProps = { 

}

declare module 'styled-components'{
  type ThemeType = typeof theme;

  // extend do theme original
  export interface DefaultTheme extends ThemeType {}
}

