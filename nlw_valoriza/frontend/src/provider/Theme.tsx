
import React from 'react'

interface Props {
    children: string;
}

export const ThemeContext = React.createContext({})

export const ThemeProvider = (props: Props) => {
    const theme = {
        dark: {
            backgroundColor: "#40403B",
            color: "#FFFFEE"
        },
        light: {
            backgroundColor: "#FFFFEE",
            color: "#40403B"
        }
    }
    return (
        <>
            <ThemeContext.Provider value={{theme: theme.light}}>
                {props.children}
            </ ThemeContext.Provider>
        </>
    )
}
