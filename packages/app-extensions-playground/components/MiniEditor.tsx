import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Editor from 'react-simple-code-editor';

interface MiniEditorProps {
  id: string;
  code: string;
  highlightCode: (code: string) => string;
  onChange: (newCode: string) => void;
}

const MiniEditorContainer = styled.div`
  border: 0.1rem solid #c4cdd5;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 rgba(99, 115, 129, 0.05);
  padding: 0.5rem 1.2rem;
  max-height: 500px;
  overflow: auto;

  &.MiniEditor--isFocused {
    box-shadow: inset 0 1px 0 0 rgba(99, 115, 129, 0.05), 0 0 0 0.2rem #5c6ac4;
  }
`;

export default function MiniEditor({id, code, highlightCode, onChange}: MiniEditorProps) {
  const componentId = `MiniEditor-${id.trim()}`;
  const [isFocused, setIsFocused] = useState(false);
  let className = '';

  if (isFocused) {
    className += 'MiniEditor--isFocused';
  }

  useEffect(() => {
    const textarea = document.getElementById(id);
    if (textarea) {
      textarea.onblur = () => setIsFocused(false);
      textarea.onfocus = () => setIsFocused(true);
    }
  });

  return (
    <MiniEditorContainer className={className}>
      <Editor
        highlight={highlightCode}
        onValueChange={newCode => onChange(newCode)}
        style={{
          fontFamily: 'FMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace',
        }}
        textareaId={componentId}
        value={code}
      />
    </MiniEditorContainer>
  );
}
