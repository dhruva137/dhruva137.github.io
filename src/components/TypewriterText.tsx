import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  lines: string[];
  className?: string;
}

export const TypewriterText = ({ lines, className = '' }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      // Natural typing speed variation
      const delay = 28 + Math.random() * 35;
      const timer = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] || '') + line[currentChar];
          return next;
        });
        setCurrentChar(c => c + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Pause between lines
      const timer = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines, done]);

  return (
    <div className={`space-y-4 ${className}`}>
      {lines.map((_, i) => (
        <p key={i} className="min-h-[1.6em]">
          {displayed[i] || ''}
          {/* Blinking cursor only on active line */}
          {i === currentLine && !done && (
            <span className="animate-blink ml-0.5 inline-block w-0.5 h-5 bg-current align-text-bottom" />
          )}
        </p>
      ))}
    </div>
  );
};
