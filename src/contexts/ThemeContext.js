import { createContext, useState } from "react";
//ThemeContext and ThemeContextProvider 可以合併為一個檔案

export const themes = {
    dark:{
        name:'dark',
        backgroundColor:'gray',
        color:'white',
    },
    light:{
        name:'light',
        backgroundColor:'yellow',
        color:'black',
    }
}

const ThemeContext = createContext({...themes.dark})
//createContext({})也可以 預設值

export default ThemeContext;

export const ThemeContextProvider = function( {children}){
    const [theme, setTheme] = useState(themes.light)
    return(
        <ThemeContext.Provider value={{...theme, setTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}