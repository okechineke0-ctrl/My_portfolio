import React, { useState } from 'react';
import { SKILL_CATEGORIES, TESTIMONIALS } from '../data/portfolioData';
import { 
  Code, 
  Server, 
  Smartphone, 
  Database, 
  Terminal, 
  Check, 
  Quote, 
  Cpu, 
  Layers, 
  ShieldAlert, 
  FileCode2 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'express' | 'react-native' | 'database'>('express');

  const codeSnippets = {
    express: `// Production Express.js Architecture Pattern
// Developed by Okechineke Success Chiemerie (Ocean Technologies Awgu)
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(helmet());
app.use(express.json({ limit: '1mb' }));

// Resilient Rate-Limiter for High-Impact Endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'Too many requests. Please try again later.' }
});

app.post('/api/v1/orders', apiLimiter, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { client, payload, signature } = req.body;
    // Layered Validation & Idempotency Check
    const result = await processClientTransaction({ client, payload });
    return res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
});`,
    'react-native': `// Cross-Platform React Native Custom Hook & Storage Cache
// Developed by Okechineke Success Chiemerie for Mobile Builds
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

export const useSecureSession = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const authenticateWithBiometrics = async (): Promise<boolean> => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Unlock Ocean Technologies Terminal',
      fallbackLabel: 'Enter Passcode',
    });
    setIsAuthenticated(result.success);
    return result.success;
  };

  return { isAuthenticated, isBiometricSupported, authenticateWithBiometrics };
};`,
    database: `// PostgreSQL & MongoDB Resilient Connection Architecture
// Designed for High Concurrency at Ocean Technologies Awgu
import { Pool } from 'pg';
import mongoose from 'mongoose';

// Relational Pool with Active Health Checks
export const pgPool = new Pool({
  max: 25,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pgPool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client:', err);
});

// Indexed NoSQL Schema for Ultra-Fast Search Retrieval
const ClientProjectSchema = new mongoose.Schema({
  projectId: { type: String, required: true, unique: true, index: true },
  clientName: { type: String, required: true },
  status: { type: String, enum: ['pending', 'active', 'delivered'], default: 'pending', index: true },
  metadata: { type: Map, of: String },
}, { timestamps: true });`
  };

  return (
    <section id="tech-stack" className="py-20 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
            Technical Mastery & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Engineering Stack Tailored for Robust, Scalable Builds
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Full-stack proficiency covering React web interfaces, React Native cross-platform mobile apps, Express & Node.js backend pipelines, and high-concurrency database storage.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="bg-slate-900/70 border border-slate-800/80 rounded-3xl p-6 sm:p-7 hover:border-slate-700/80 transition-all shadow-lg shadow-black/20"
            >
              <div className="pb-4 mb-4 border-b border-slate-800/80">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {category.description}
                </p>
              </div>

              {/* Skills list as clean rows with experience metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/60 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        {skill.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {skill.level}
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-indigo-400 font-medium">
                      {skill.experience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architectural Code Showcase */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-1">
                Engineering Discipline & Code Quality
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How I Architect Real Production Code
              </h3>
            </div>

            {/* Code Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveCodeTab('express')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeCodeTab === 'express'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Express Backend
              </button>
              <button
                onClick={() => setActiveCodeTab('react-native')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeCodeTab === 'react-native'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                React Native
              </button>
              <button
                onClick={() => setActiveCodeTab('database')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeCodeTab === 'database'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Databases
              </button>
            </div>
          </div>

          {/* Terminal / Code Editor Container */}
          <div className="mt-5 rounded-2xl bg-slate-950 border border-slate-800/90 p-4 sm:p-5 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-900 text-[11px] text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-slate-400">
                  {activeCodeTab === 'express' && 'src/routes/api.router.ts'}
                  {activeCodeTab === 'react-native' && 'src/hooks/useSecureSession.ts'}
                  {activeCodeTab === 'database' && 'src/config/database.ts'}
                </span>
              </span>
              <span className="text-slate-500">TypeScript · Production Architecture</span>
            </div>
            <pre className="text-indigo-200/95 font-mono">
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>
        </div>

        {/* Client & Institutional Endorsements */}
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6">
            Verified Testimonials & Peer Feedback
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800/70 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </div>
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-semibold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-indigo-400">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {t.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
