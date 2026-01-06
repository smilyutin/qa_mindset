import React, { useState } from 'react';
import { modules } from '../data/modules';
import ModuleCard from '../components/ModuleCard';

const uniqueLevels = Array.from(new Set(modules.map(m => m.level)));
const uniqueTags = Array.from(new Set(modules.flatMap(m => m.tags)));

const Modules: React.FC = () => {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('');
  const [tag, setTag] = useState('');

  const filtered = modules.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase()) || m.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesLevel = !level || m.level === level;
    const matchesTag = !tag || m.tags.includes(tag);
    return matchesSearch && matchesLevel && matchesTag;
  });

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: 'linear-gradient(120deg, #f1f5f9 60%, #e0e7ff 100%)', padding: '40px 4vw 60px 4vw', boxSizing: 'border-box', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', color: '#1e293b' }}>
      <h1 style={{ textAlign: 'left', marginBottom: 36, fontSize: 38, fontWeight: 800, color: '#1e293b', letterSpacing: '-1px' }}>QA Mindset</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search modules..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All Levels</option>
          {uniqueLevels.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <select value={tag} onChange={e => setTag(e.target.value)}>
          <option value="">All Tags</option>
          {uniqueTags.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.2rem', alignItems: 'stretch' }}>
        {filtered.map(module => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
};

export default Modules;
