import React from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage, ReportPage } from "./page";

function App() {
  return (
    <div className={styles.App}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="*" element={<h1>404 not found </h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
