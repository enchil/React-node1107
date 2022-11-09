import ThemeContext from "../contexts/ThemeContext"
import { useContext } from 'react'

export default function ThemeTest(params) {
    console.log("ThemeTest");
    const {name, backgroundColor, color} = useContext(ThemeContext)

    const style = {
        backgroundColor,
        color,
        width:'100px',
        height:'100px',
    }
    return(
        <div style={style}>
            ThemeTest {name}
        </div>
    )
}