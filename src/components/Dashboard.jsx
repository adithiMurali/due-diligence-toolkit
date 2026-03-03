import React from 'react';
import mockData from '../data/mock_intelligence.json';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer,
    LineChart, Line, AreaChart, Area
} from 'recharts';
import { TrendingUp, Activity, BarChart2, ShieldAlert, Settings, Network } from 'lucide-react';

const Dashboard = ({ currentView }) => {
    if (currentView === 'Settings') {
        return (
            <div className="widget glass-panel widget-full animate-fade-up">
                <h2 style={{ marginBottom: '2rem' }}><Settings size={20} className="brand-icon" /> Dashboard Configuration</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>

                    {/* Data Sources Section */}
                    <div>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Network size={18} /> Integrations & Data Sources
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Crunchbase API Key</label>
                                <input
                                    type="password"
                                    defaultValue="sk_live_cb_xxxxxxxxxxxxxxxxxxx"
                                    style={{
                                        width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-light)',
                                        color: 'var(--text-primary)', fontFamily: 'monospace'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>OpenAI API Key (for Sentiment)</label>
                                <input
                                    type="password"
                                    defaultValue="sk-proj-xxxxxxxxxxxxxxxxxxx"
                                    style={{
                                        width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-light)',
                                        color: 'var(--text-primary)', fontFamily: 'monospace'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Preferences Section */}
                    <div>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ShieldAlert size={18} /> Alerts & Preferences
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                                <div>
                                    <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Deal Flow Notifications</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Alert me on rounds {'>'} $50M</div>
                                </div>
                                <div style={{ width: '40px', height: '24px', background: 'var(--brand-accent)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                                    <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                                <div>
                                    <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Daily Sentiment Report</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Email digest at 09:00 EST</div>
                                </div>
                                <div style={{ width: '40px', height: '24px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                                    <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }}></div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                            <button style={{
                                padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'var(--brand-accent)',
                                color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer',
                                boxShadow: '0 4px 12px var(--brand-accent-glow)'
                            }}>
                                Save Configuration
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-grid">

            {/* Sector Funding Heatmap (Simplified to BarChart for visual impact) */}
            {(currentView === 'Overview' || currentView === 'Market Trends') && (
                <div className={`widget glass-panel ${currentView === 'Market Trends' ? 'widget-full' : 'widget-large'} animate-fade-up`}>
                    <h2 className="stat-header">
                        <span><BarChart2 size={20} className="brand-icon" /> Sector Funding Velocity</span>
                    </h2>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={mockData.heatmap} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <XAxis dataKey="sector" stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} />
                                <YAxis stroke="var(--text-secondary)" />
                                <RechartsTooltip cursor={{ fill: 'var(--border-light)' }} contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 8, color: '#fff' }} />
                                <Bar dataKey="funding" fill="var(--brand-accent)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}

            {/* Sentiment Gauge */}
            {(currentView === 'Overview' || currentView === 'Market Trends') && (
                <div className={`widget glass-panel ${currentView === 'Market Trends' ? 'widget-full' : 'widget-small'} animate-fade-up delay-1`}>
                    <h2><ShieldAlert size={20} className="brand-icon" /> Market Sentiment</h2>
                    <div style={{ marginTop: '2rem' }}>
                        <div className="stat-value" style={{ color: mockData.sentiment.overall > 50 ? 'var(--success)' : 'var(--danger)' }}>
                            {mockData.sentiment.overall}/100
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <span className="badge positive">{mockData.sentiment.label}</span>
                            <span style={{ fontSize: '0.875rem' }}>{mockData.sentiment.shift_from_last_month}</span>
                        </div>
                        <h3>Top Signals:</h3>
                        <div className="tags">
                            {mockData.sentiment.top_keywords.map((kw, i) => (
                                <span key={i} className="tag">{kw}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Emerging Trend Lines */}
            {(currentView === 'Overview' || currentView === 'Market Trends') && (
                <div className={`widget glass-panel ${currentView === 'Market Trends' ? 'widget-full' : 'widget-large'} animate-fade-up delay-2`}>
                    <h2><TrendingUp size={20} className="brand-icon" /> Emerging Industry Signals (Mentions)</h2>
                    <div style={{ width: '100%', height: 260 }}>
                        <ResponsiveContainer>
                            <LineChart data={mockData.trends} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <XAxis dataKey="month" stroke="var(--text-secondary)" />
                                <YAxis stroke="var(--text-secondary)" />
                                <RechartsTooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 8 }} />
                                <Line type="monotone" dataKey="AI" stroke="var(--brand-accent)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="Climate" stroke="var(--success)" strokeWidth={3} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="Fintech" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}

            {/* Investor Activity Tracker */}
            {(currentView === 'Overview' || currentView === 'Deal Flow') && (
                <div className={`widget glass-panel ${currentView === 'Deal Flow' ? 'widget-full' : 'widget-small'} animate-fade-up delay-3`}>
                    <h2><Activity size={20} className="brand-icon" /> Live Deal Flow</h2>
                    <div className="feed-list">
                        {mockData.investor_feed.map((feed) => (
                            <div key={feed.id} className="feed-item">
                                <div className="feed-main">
                                    <span className="feed-startup">{feed.investor}</span>
                                    <span className="feed-action">{feed.action} in <strong>{feed.startup}</strong></span>
                                </div>
                                <div className="feed-meta">
                                    <span className="feed-amount">{feed.amount}</span>
                                    <span className="feed-time">{feed.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Dashboard;
