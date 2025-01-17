import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    primaryColor: string;
    textColor: string;
    dividerColor: string;
  }
}
