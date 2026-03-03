import React from 'react';
import Dashboard from './components/Dashboard';
import { Network, Activity, Home, Briefcase, Settings } from 'lucide-react';
import './index.css';

function App() {
  const [currentView, setCurrentView] = React.useState('Overview');

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="brand">
          <Network size={28} className="brand-icon" />
          <h2 style={{ marginBottom: 0 }}>DueDiligence</h2>
        </div>

        <nav className="nav-links">
          <a href="#" className={`nav-item ${currentView === 'Overview' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setCurrentView('Overview'); }}>
            <Home size={20} /> Overview
          </a>
          <a href="#" className={`nav-item ${currentView === 'Market Trends' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setCurrentView('Market Trends'); }}>
            <Activity size={20} /> Market Trends
          </a>
          <a href="#" className={`nav-item ${currentView === 'Deal Flow' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setCurrentView('Deal Flow'); }}>
            <Briefcase size={20} /> Deal Flow
          </a>
          <a href="#" className={`nav-item ${currentView === 'Settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setCurrentView('Settings'); }}>
            <Settings size={20} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <div>
            <h1>Market Intelligence</h1>
            <p>Real-time sector funding and sentiment analysis</p>
          </div>
          <div className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', display: 'inline-block' }}></span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Live Feed Active</span>
          </div>
        </header>

        <Dashboard currentView={currentView} />
      </main>
    </div>
  );
}

export default App;
