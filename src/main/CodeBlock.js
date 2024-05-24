import React, { useRef, useState, useEffect } from 'react';

function CodeBlock({ code }) {
  const codeRef = useRef(null);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const handleCopy = () => {
    const code = codeRef.current;
    if (code) {
      window.getSelection().removeAllRanges();
      const range = document.createRange();
      range.selectNode(code);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();  
      setShowCopySuccess(true);}  
  };


  useEffect(() => {
    if (showCopySuccess) {
      const timer = setTimeout(() => {
        setShowCopySuccess(false);
      }, 1500); 
      return () => clearTimeout(timer);
    }
  }, [showCopySuccess]);

  return (
    <div className="code-container">
      <pre ref={codeRef}><code>{code}</code></pre>
      <button onClick={handleCopy} className="copy-btn">Copy</button>
      {showCopySuccess && <div className="copy-success">Code copied to clipboard!</div>}
    </div>
  );
}


export default CodeBlock