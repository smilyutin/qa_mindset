import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const isHtmlContent = (content: string) => {
  return /^\s*(?:<!doctype html\b|<html\b)/i.test(content);
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (isHtmlContent(content)) {
    return <div style={{ color: '#b91c1c', fontWeight: 600, fontSize: 20, marginTop: 32 }}>Module content not found. Please check the module path or try again later.</div>;
  }
  return (
    <div className="module-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => (
            <div className="module-table-scroll">
              <table>{children}</table>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
