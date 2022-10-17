import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Prediction,Dashboard,ApiSetting, Automatic, BotConfig, CoinMarket, Activity, Manual, Market, PaidHistory, PLAccount, Portfolio, ProfitLoss, Satistics, Trailing, UserDashboard, UserManagement, UserStatistics, AdminPLAccount, UserProfit } from 'screens';
import { SideBar, UserSideBar } from './components';
import { useScript } from './hooks';
import useLocalStorage from 'hooks/useLocalStorage';

function App() {
  const [role,setRole] = useLocalStorage('role','');
  return (
    <main className='custom-main'>
      <BrowserRouter>
      {
        role == 'admin' ?
        <SideBar/>
        :
        <UserSideBar/>
      }
        <Routes>
            <Route exact path='/' element={<Dashboard/>} />
            <Route path='/activity' element={<Activity />} />
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
            <Route path='/pl-account' element={<AdminPLAccount />} />
            <Route path='/user-profit' element={<UserProfit />} />
            <Route path='/user/bot-config' element={<BotConfig />} />
            <Route path='/user/prediction' element={<Prediction />} />
            <Route path='/user/satistics' element={<UserStatistics />} />
            <Route path='/user/pl-account' element={<PLAccount />} />
            <Route path='/user/paid-history' element={<PaidHistory />} />
            <Route path='/user/dashboard' element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
