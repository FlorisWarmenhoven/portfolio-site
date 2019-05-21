import * as styledComponents from "styled-components";
// tslint:disable-next-line:no-duplicate-imports
import { ThemedStyledComponentsModule } from "styled-components";

import { IThemeInterface } from "./theme";

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
// tslint:disable-next-line:no-default-export
export default styled;
