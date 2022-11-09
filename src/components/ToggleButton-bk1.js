import { useState, useContext } from "react";
import ThemeContext, {themes} from "../contexts/ThemeContext";

export default function ToggleButton({statusIndex, texts, handler}){
    const [myIndex, setMyIndex] = useState(statusIndex)
    const {name, setTheme} = useContext(ThemeContext)
    const classNames = ['btn']
    console.log({myIndex});

    //const text = myIndex ===0 ? 'dark':'light'
    classNames.push(myIndex ===0 ? 'btn-primary':'btn btn-outline-primary')
    const myClick= ()=>{
        setMyIndex(myIndex ===0 ? 1:0)
        setTheme(myIndex ===0 ? themes.light:themes.dark)
    }
    
    return (
        
        <>
            <button type="button" className={classNames.join(' ')} onClick={myClick} >{texts[myIndex]}</button>
        </>
    )
}


ToggleButton.defaultProps = {
    statusIndex:0,
    texts: ['dark','light'],
    handler: (index)=>{},
}