import { useContext } from "react";
import { useLocation, Link } from 'react-router-dom'
import ToggleButton from './ToggleButton'
import ThemeContext, {themes} from "../contexts/ThemeContext";
import AuthContext from "../contexts/AuthContext";

export default  function Navbar(params) {
    const location = useLocation()
    const { name: themeName, setTheme } = useContext(ThemeContext);
    const { myAuth } = useContext(AuthContext);
    console.log({themeName});
    const seg1 = location.pathname.split("/")[1]

    const actives = {
    //     'list':' nav-link ',
    //     'tmp':' nav-link ',
    //     'login':' nav-link '
    }

    // if(actives[seg1]){
    //     actives[seg1] += 'active'
    // }

    actives[seg1]={
        backgroundColor:"lightblue",
        borderRadius:"10px",
    }

    return (<>
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" style={actives.list}  to="/list">AB-List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={actives.tmp}  to="/tmp">TMP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={actives.login}  to="/login">Login</Link>
        </li>
      </ul>

      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">{myAuth.account}
        </li>
        <li className="nav-item">
            <ToggleButton  
            texts={['dark','light']}  
            statusIndex={themeName === 'dark'? 0 : 1}
            handler = {(i)=>{
              setTheme(i ===0? themes.dark : themes.light)
            }}
            />
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    </>)
    
}