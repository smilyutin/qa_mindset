import React from 'react';
import TagPill from './TagPill';
import { Link } from 'react-router-dom';

type Module = {
  id: string;
  title: string;
  level: string;
  tags: string[];
  prereq?: string[];
};

interface Props {
  module: Module;
}

const ModuleCard: React.FC<Props> = ({ module }) => {
  return (
    <Link
      to={`/modules/${module.id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        border: 'none',
        borderRadius: 18,
        padding: '28px 24px 20px 24px',
        background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
        display: 'block',
        transition: 'box-shadow 0.2s, transform 0.2s',
        boxShadow: '0 4px 24px 0 #e0e7ff99',
        cursor: 'pointer',
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        minHeight: 180,
        position: 'relative',
      }}
      onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)')}
      onMouseOut={e => (e.currentTarget.style.transform = 'none')}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 12px 0', color: '#3730a3', letterSpacing: '-0.5px' }}>{module.title}</h2>
      <div style={{ marginBottom: 10, fontSize: 15, color: '#6366f1', fontWeight: 600 }}>
        {module.level}
      </div>
      {module.prereq && module.prereq.length > 0 && (
        <div style={{ marginBottom: 8, fontSize: 14, color: '#64748b' }}>
          <strong>Prereq:</strong> {module.prereq.join(', ')}
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
        {module.tags.map(tag => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
      {/* Teaser/description placeholder for future */}
    </Link>
  );
};

export default ModuleCard;
