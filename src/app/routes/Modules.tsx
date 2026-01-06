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
      <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: 38, fontWeight: 800, color: '#3730a3', letterSpacing: '-1px', margin: 0, whiteSpace: 'nowrap' }}>QA Mindset</h1>
        <input
          type="text"
          placeholder="Search modules..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.6em 1.2em', borderRadius: 8, border: '1.5px solid #3730a3', fontSize: 18, outline: 'none', color: '#1e293b', background: '#fff', minWidth: 180 }}
        />
        <select value={level} onChange={e => setLevel(e.target.value)} style={{ padding: '0.6em 1.2em', borderRadius: 8, border: '1.5px solid #3730a3', fontSize: 18, color: '#1e293b', background: '#fff', minWidth: 140 }}>
          <option value="">All Levels</option>
          {uniqueLevels.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <select value={tag} onChange={e => setTag(e.target.value)} style={{ padding: '0.6em 1.2em', borderRadius: 8, border: '1.5px solid #3730a3', fontSize: 18, color: '#1e293b', background: '#fff', minWidth: 140 }}>
          <option value="">All Tags</option>
          {uniqueTags.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.2rem', alignItems: 'stretch' }}>
        {(() => {
          // Find index of QA Regulated Domains
          const qaIdx = filtered.findIndex(m => m.id === 'qa-regulated-domains');
          if (qaIdx === -1) return filtered.map(module => <ModuleCard key={module.id} module={module} />);
          // Split modules
          const beforeQA = filtered.slice(0, qaIdx + 1);
          const afterQA = filtered.slice(qaIdx + 1);
          return [
            ...beforeQA.map(module => <ModuleCard key={module.id} module={module} />),
            <div key="divider" style={{ gridColumn: '1/-1', margin: '32px 0' }}><hr style={{ border: 'none', borderTop: '2px solid #c7d2fe', margin: 0 }} /></div>,
            ...afterQA.map(module => <ModuleCard key={module.id} module={module} />)
          ];
        })()}
      </div>
    </div>
  );
};

export default Modules;
