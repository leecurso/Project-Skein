import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './store';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import Navbar from './layout/Navbar';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);  // 로그인 상태 관리

  const goToMain = () => {
    console.log("Main 페이지로 이동");
  };

  useEffect(() => {
    console.log('App은 돌아감.');
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Navbar goToMain={goToMain} />
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/main" element={<MainPage goToMain={goToMain} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
