import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const isHtmlContent = (content: string) => {
  return content.startsWith('<!DOCTYPE html>') || content.startsWith('<html');
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (isHtmlContent(content)) {
    return <div style={{ color: '#b91c1c', fontWeight: 600, fontSize: 20, marginTop: 32 }}>Module content not found. Please check the module path or try again later.</div>;
  }
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
