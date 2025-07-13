import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DisasterDetail from './pages/DisasterDetail';
import CreateDisaster from './pages/CreateDisaster';
import SubmitReport from './pages/SubmitReport';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disaster/:id" element={<DisasterDetail />} />
            <Route path="/create-disaster" element={<CreateDisaster />} />
            <Route path="/submit-report" element={<SubmitReport />} />
            <Route path="/admin" element={<div className="p-8 text-center">Admin panel coming soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;