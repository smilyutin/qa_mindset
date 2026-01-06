

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { modules } from '../data/modules';
import MarkdownRenderer from '../components/MarkdownRenderer';

type Module = {
  id: string;
  title: string;
  file: string;
};

const fetchMarkdown = async (filePath: string): Promise<string> => {
  const response = await fetch(filePath);
  return await response.text();
};

const ModuleDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Scroll to top when module changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const module = modules.find((m: Module) => m.id === id);
  const [content, setContent] = useState('');
  // Checklist and checked state removed

  // Only load markdown content
  useEffect(() => {
    if (module) {
      fetchMarkdown(module.file).then(md => {
        // Remove frontmatter (---[\s\S]*?---) and set content
        const cleaned = md.replace(/^---[\s\S]*?---\s*/, '');
        setContent(cleaned);
      });
    }
  }, [module]);

  // handleCheck removed

  // Find next module by order in the array
  const currentIdx = modules.findIndex((m: Module) => m.id === id);
  const nextModule = currentIdx >= 0 && currentIdx < modules.length - 1 ? modules[currentIdx + 1] : null;

  if (!module) return <div>Module not found</div>;

  return (
    <>
      <div style={{ width: '100vw', minHeight: '100vh', background: '#fff', padding: '32px 5vw', boxSizing: 'border-box', textAlign: 'left' }}>
        {/* Home button at the top */}
        <div style={{ marginBottom: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18 }}>&larr; Home</Link>
        </div>
        <h1 style={{ textAlign: 'left', marginBottom: 32 }}>{module.title}</h1>
        <div style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
          <MarkdownRenderer content={content} />
        </div>
        {/* Checklist UI removed; Practical Checklist will be rendered from markdown content */}
        {/* Exercises Section removed */}
        {/* Default exercises for other modules can go here if needed */}
      </div>
      {nextModule ? (
        <div style={{ marginTop: 40, textAlign: 'right' }}>
          <Link to={`/modules/${nextModule.id}`} style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18 }}>
            Next: {nextModule.title} &rarr;
          </Link>
        </div>
      ) : (
        <div style={{ marginTop: 40, textAlign: 'right' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18 }}>
            &larr; Home
          </Link>
        </div>
      )}
    </>
  );
};

export default ModuleDetail;
