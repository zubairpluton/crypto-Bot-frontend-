import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiSetting, Automatic, BotConfig, CoinMarket, Home, Manual, Market, PLAccount, Portfolio, ProfitLoss, Satistics, Trailing, UserManagement, UserStatistics } from 'screens';
import { SideBar, UserSideBar } from './components';
import { useScript } from './hooks';
import Prediction from './screens/UserPanel/Prediction';

function App() {
  return (
    <main className='custom-main'>
      <BrowserRouter>
      {/* <SideBar/> */}
      <UserSideBar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/profit-loss' element={<ProfitLoss />} />
            <Route path='/coin-market' element={<CoinMarket />} />
            <Route path='/market' element={<Market />} />
            <Route path='/auto-rsi' element={<Automatic />} />
            <Route path='/auto-trailing' element={<Trailing />} />
            <Route path='/manual-bot' element={<Manual />} />
            <Route path='/user-management' element={<UserManagement />} />
            <Route path='/api-setting' element={<ApiSetting />} />
            <Route path='/satistics' element={<Satistics />} />
            <Route path='/user/bot-config' element={<BotConfig />} />
            <Route path='/user/prediction' element={<Prediction />} />
            <Route path='/user/satistics' element={<UserStatistics />} />
            <Route path='/user/pl-account' element={<PLAccount />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
