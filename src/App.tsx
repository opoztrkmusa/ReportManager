import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home';
import AddReport from './pages/AddReport';
import Reports from './pages/Reports';
import Header from './components/Header';
import EditReport from './pages/EditReport';
import ReportDetail from './pages/ReportDetail';


const App = () => {
  return (
    <MantineProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-report" element={<AddReport />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:id" element={<ReportDetail />} />
          <Route path="/reports/edit/:id" element={<EditReport />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
