import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react'
import Spinner from './components/Spinner/Spinner';
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import MainPage from './components/pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            {/* <Route path="/login" element={<Login />} />
                            <Route path="/personal" element={<Personal />} />
                            <Route path="*" element={<Page404 />} /> */}
                        </Routes>
                    </Suspense>
                </main>
                <AppFooter />
            </div>
    </BrowserRouter>

  );
}

export default App;
