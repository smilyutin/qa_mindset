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
  // Use import.meta.env.BASE_URL for correct base in production
  const base = import.meta.env.BASE_URL || '/';
  // Ensure no double slash
  const url = base.replace(/\/$/, '') + '/' + filePath.replace(/^\//, '');
  const response = await fetch(url);
  const text = await response.text();
  // If the response is HTML (likely a 404), show a friendly error
  if (text.startsWith('<!DOCTYPE html>') || text.startsWith('<html')) {
    return 'Module content not found. Please check the module path or try again later.';
  }
  return text;
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
      <div style={{ width: '100vw', minHeight: '100vh', background: 'linear-gradient(120deg, #f1f5f9 60%, #e0e7ff 100%)', padding: '40px 4vw 60px 4vw', boxSizing: 'border-box', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', color: '#1e293b' }}>
        {/* Home button at the top */}
        <div style={{ marginBottom: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18 }}>&larr; Home</Link>
        </div>
        <h1 style={{ textAlign: 'left', marginBottom: 32 }}>{module.title}</h1>
        <div style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
          <MarkdownRenderer content={content} />
        </div>
        {/* Next module link always visible at bottom, center-aligned for visibility */}
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          {nextModule ? (
            <Link to={`/modules/${nextModule.id}`} style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18 }}>
              Next: {nextModule.title} &rarr;
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18 }}>
              &larr; Home
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ModuleDetail;
