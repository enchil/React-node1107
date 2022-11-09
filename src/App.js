
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import AbList from './pages/ab-list';
import Tmp from './pages/Tmp';
import Login from './pages/Login';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {

  
  return (
      <>
      <BrowserRouter>
      <ThemeContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={ <AbList /> }> </Route>
          <Route path="/list" element={ <AbList /> }> </Route>

          <Route path="/tmp/:sid" element={ <Tmp /> }> </Route>
          <Route path="/tmp/" element={ <Tmp /> }> </Route>

          <Route path="/login" element={ <Login /> }> </Route>
        </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
      </>
  );
}

export default App;
