import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react'
import Spinner from './components/Spinner/Spinner';
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import MainPage from './components/pages/MainPage/MainPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import Page404 from './components/pages/Page404/Page404';
import LoginPage from './components/pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
                <AppFooter />
            </div>
    </BrowserRouter>

  );
}

export default App;
