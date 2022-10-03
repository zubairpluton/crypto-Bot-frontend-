import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './screens';
import { SideBar } from './components';
import { useScript } from './hooks';

function App() {
  return (
    <main className='custom-main'>
      <BrowserRouter>
      <SideBar/>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
