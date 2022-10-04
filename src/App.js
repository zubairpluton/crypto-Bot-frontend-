import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CoinMarket, Home, Market, Portfolio, ProfitLoss } from './screens';
import { SideBar } from './components';
import { useScript } from './hooks';

function App() {
  return (
    <main className='custom-main'>
      <BrowserRouter>
      <SideBar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/profit-loss' element={<ProfitLoss />} />
            <Route path='/coin-market' element={<CoinMarket />} />
            <Route path='/market' element={<Market />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
