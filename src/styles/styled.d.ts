import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLighten: string;
      greyScale1: string;
      greyScale2: string;
      greyScale3: string;
      greyScale4: string;
      greyScale5: string;
    };
    font: {
      title: string;
      subtitle: string;
      body: string;
      caption: string;
      button: string;
    };
  }
}
