
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AbList from './pages/ab-list';
import Tmp from './pages/Tmp';

function App() {

  
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AbList /> }> </Route>
          <Route path="/tmp" element={ <Tmp /> }> </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
