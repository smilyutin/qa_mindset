import React from 'react';

interface Props {
  tag: string;
}

const TagPill: React.FC<Props> = ({ tag }) => (
  <span style={{
    display: 'inline-block',
    background: 'linear-gradient(90deg, #6366f1 60%, #a5b4fc 100%)',
    color: '#fff',
    borderRadius: 12,
    padding: '2px 12px',
    fontSize: 14,
    marginRight: 4,
    marginBottom: 4,
    fontWeight: 500,
    letterSpacing: '0.2px',
    boxShadow: '0 1px 4px #e0e7ff66',
  }}>{tag}</span>
);

export default TagPill;
