import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/es/locale/ru_RU';

import SignIn from './page/sign-in'
import Catalog from './page/catalog'
import { theme } from './styles/antd-tokens';
import { BouquetInfo } from './page/bouquet-info';

function App() {
  return (
    <div className='App'>
      <ConfigProvider locale={ruRU} theme={theme}>
        <Routes>
          <Route
            path='/'
            element={<SignIn />} />
          <Route
            path='/catalog'
            element={<Catalog />}
          />
          <Route
            path='/catalog/:id'
            element={<BouquetInfo />}
          />
        </Routes>
      </ConfigProvider>
    </div>
  )
}

export default App
