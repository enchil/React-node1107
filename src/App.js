
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import AbList from './pages/ab-list';
import AbListAuth from './pages/ab-list-auth';
import Tmp from './pages/Tmp';
import Login from './pages/Login';
import MyContextProviders from './contexts/MyContextProviders';
import Canvas1 from './pages/Canvas1';


function App() {

  
  return (
      <>
      <BrowserRouter>
      <MyContextProviders>
      <Navbar />
        <Routes>
          <Route path="/" element={ <AbList /> }> </Route>
          <Route path="/list" element={ <AbList /> }> </Route>
          <Route path="/list-auth" element={ <AbListAuth /> }> </Route>

          <Route path="/tmp/:sid" element={ <Tmp /> }> </Route>
          <Route path="/tmp/" element={ <Tmp /> }> </Route>

          <Route path="/login" element={ <Login /> }> </Route>

          <Route path="/canvas1" element={ <Canvas1 /> }> </Route>
        </Routes>
        
        </MyContextProviders>
      </BrowserRouter>
      </>
  );
}

export default App;
