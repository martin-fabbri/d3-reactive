import * as styledComponents from "styled-components";

export interface IThemeInterface {
    primaryColor: string;
}

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export const theme = {
    primaryColor: '#e9e9eb',
    xyPlotAxisLineColor: '#e6e6e9'
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };