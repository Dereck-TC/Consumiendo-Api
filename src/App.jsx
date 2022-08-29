import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Galery from './pages/Galery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Galery/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
