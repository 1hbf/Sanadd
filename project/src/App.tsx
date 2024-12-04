import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HospitalSearch from './pages/HospitalSearch';
import HospitalSearchResults from './pages/HospitalSearchResults';
import SecondOpinion from './pages/SecondOpinion';
import MedicalChatbot from './pages/MedicalChatbot';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';
import EmergencyResponse from './pages/EmergencyResponse';
import EmergencyResults from './pages/EmergencyResults';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hospital-search" element={<HospitalSearch />} />
            <Route path="/hospital-search/results" element={<HospitalSearchResults />} />
            <Route path="/second-opinion" element={<SecondOpinion />} />
            <Route path="/medical-chatbot" element={<MedicalChatbot />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emergency-response" element={<EmergencyResponse />} />
            <Route path="/emergency-response/results" element={<EmergencyResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;