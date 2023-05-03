import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background: {
            main: {
                100: "#d9e5f0",
                200: "#b3cbe1",
                300: "#8db0d1",
                400: "#6796c2",
                500: "#417cb3",
                600: "#34638f",
                700: "#274a6b",
                800: "#1a3248",
                900: "#0d1924",
            },
            grey: {
                100: "#e6e6e6",
                200: "#cccccc",
                300: "#b3b3b3",
                400: "#999999",
                500: "#808080",
                600: "#666666",
                700: "#4d4d4d",
                800: "#333333",
                900: "#1a1a1a",
            },
        },
        text: {
            primary: "#417CB3",
            secondary: "#494949",
            white: "#fff",
        },
        action: {
            active: "#001E3C",
        },
        success: {
            main: "#494949",
        },
        abort: {
            red: {
                100: "#f8cccc",
                200: "#f19a9a",
                300: "#e96767",
                400: "#e23535",
                500: "#db0202",
                600: "#af0202",
                700: "#830101",
                800: "#580101",
                900: "#2c0000",
            },
        },
    },
    typography: {
        fontFamily: ["Open Sans", "sans serif"].join(","),
        fontSize: 14,
        h1: {
            fontFamily: ["Open Sans", "sans serif"].join(","),
            fontSize: 50,
            fontWeight: 700,
        },
        h2: {
            fontFamily: ["Open Sans", "sans serif"].join(","),
            fontSize: 32,
            fontWeight: 500,
            color: "#494949",
            letterSpacing: 2,
        },
        h3: {
            fontFamily: ["Open Sans", "sans serif"].join(","),
            fontSize: 26,
            fontWeight: 400,
        },
        h4: {
            fontFamily: ["Open Sans", "sans serif"].join(","),
            fontSize: 18,
            fontWeight: 700,
        },
        h5: {
            fontFamily: ["Open Sans", "sans serif"].join(","),
            fontSize: 18,
            fontWeight: 400,
        },
        h6: {
            fontFamily: ["Open Sans", "sans serif"].join(","),
            fontSize: 16,
            fontWeight: 400,
            fontStyle: "italic",
        },
    },
});