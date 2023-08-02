/* eslint-disable no-unused-vars */
import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import NotFoundPage from "./pages/NotFoundPage";
import Forbidden from "./pages/Forbidden";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import TestPage from "./components/testPage/TestPage";
import { useUserStore } from "./store/useUserStore";
import TestPage2 from "./components/testPage/TestPage2";
import LoginForm from "./components/login/LoginForm";

function App() {
  const { userInfo } = useUserStore();

  return (
    <>
      {!userInfo ? (
        <div className="a_container">
          <header id="header">HeaD wrapper</header>
          <main>
            <Routes>
              <Route path="login" element={<LoginForm />} />
              <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className="b_container">
          <header id="header">
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="testPage" element={<TestPage />} />
              <Route path="testPage2" element={<TestPage2 />} />
              <Route path="401" element={<UnauthorizedPage />} />
              <Route path="403" element={<Forbidden />} />
              <Route path="404" element={<NotFoundPage />} />
            </Routes>
          </main>
          <div id="sidebar">
            <Sidebar />
          </div>
          {/* <footer>Footer</footer> */}
        </div>
      )}
    </>
  );
}

export default App;
