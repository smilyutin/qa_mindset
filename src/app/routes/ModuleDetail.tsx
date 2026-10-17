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
  if (!response.ok || response.headers.get('content-type')?.includes('text/html') || /^\s*(?:<!doctype html\b|<html\b)/i.test(text)) {
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

  // Follow the catalog order for previous and next navigation.
  const currentIdx = modules.findIndex((m: Module) => m.id === id);
  const previousModule = currentIdx > 0 ? modules[currentIdx - 1] : null;
  const nextModule = currentIdx >= 0 && currentIdx < modules.length - 1 ? modules[currentIdx + 1] : null;

  if (!module) return <div>Module not found</div>;

  return (
    <>
      <div style={{ width: '100vw', minHeight: '100vh', background: 'linear-gradient(120deg, #f1f5f9 60%, #e0e7ff 100%)', padding: '40px 4vw 60px 4vw', boxSizing: 'border-box', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', color: '#1e293b' }}>
        {/* Home button at the top for every page */}
        <div style={{ marginBottom: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18 }}>&larr; Home</Link>
        </div>
        <h1 style={{ textAlign: 'left', marginBottom: 32 }}>{module.title}</h1>
        <div style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
          <MarkdownRenderer content={content} />
        </div>
        <nav aria-label="Slide navigation" style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
          {previousModule && (
            <Link rel="prev" to={`/modules/${previousModule.id}`} style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18, flex: '1 1 260px' }}>
              &larr; Previous: {previousModule.title}
            </Link>
          )}
          {nextModule && (
            <Link rel="next" to={`/modules/${nextModule.id}`} style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600, fontSize: 18, flex: '1 1 260px', textAlign: 'right', marginLeft: 'auto' }}>
              Next: {nextModule.title} &rarr;
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default ModuleDetail;
