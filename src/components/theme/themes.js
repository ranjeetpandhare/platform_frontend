import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000"
};
export const darkTheme = {
    body: "#66B2FF",
    fontColor: "#fff"
};
export const GloablStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.body};

}`;