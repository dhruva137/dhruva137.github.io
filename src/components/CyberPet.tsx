import React, { useState, useEffect } from 'react';

export const CyberPet: React.FC = () => {
  const [mood, setMood] = useState<'idle' | 'eating' | 'training' | 'happy'>('idle');
  const [compute, setCompute] = useState<number>(4); // Max 5
  const [loss, setLoss] = useState<number>(0.084);
  const [epochs, setEpochs] = useState<number>(137);
  const [message, setMessage] = useState<string>('ATTENTION_ALIGNED');
  const [animFrame, setAnimFrame] = useState<number>(0);

  // Bobbing animation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimFrame((f) => (f === 0 ? 1 : 0));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  // Compute passive drain
  useEffect(() => {
    const drain = setInterval(() => {
      setCompute((c) => Math.max(1, c - 1));
    }, 25000);
    return () => clearInterval(drain);
  }, []);

  const handleFeed = () => {
    setMood('eating');
    setMessage('NOM! CONSUMING TOKENS...');
    setCompute((c) => Math.min(5, c + 2));
    setTimeout(() => {
      setMood('happy');
      setMessage('LOSS STABILIZED ♥');
      setTimeout(() => {
        setMood('idle');
        setMessage('READY FOR RESEARCH');
      }, 1500);
    }, 1200);
  };

  const handleTrain = () => {
    if (compute <= 1) {
      setMessage('LOW COMPUTE! FEED PAPERS');
      return;
    }
    setMood('training');
    setMessage('STEERING ATTENTION HEADS...');
    setCompute((c) => Math.max(1, c - 1));
    setEpochs((e) => e + 1);
    setLoss((l) => Math.max(0.001, parseFloat((l * 0.88).toFixed(4))));

    setTimeout(() => {
      setMood('happy');
      setMessage(`CIRCUIT FORMED! EPOCH ${epochs + 1}`);
      setTimeout(() => {
        setMood('idle');
        setMessage('WAITING FOR INPUT');
      }, 1500);
    }, 1400);
  };

  const handlePet = () => {
    setMood('happy');
    setMessage('ALIGNMENT BOOSTED ♥ ♥');
    setTimeout(() => {
      setMood('idle');
      setMessage('ATTENTION_ALIGNED');
    }, 1500);
  };

  return (
    <div className="retro-window p-3 sm:p-4 bg-gray-200 text-black select-none">
      {/* Window Title Bar */}
      <div className="retro-window-header bg-purple-800 text-white flex justify-between items-center text-xs">
        <span>TAMAGOTCHI_v1.0.EXE</span>
        <span>_ □ X</span>
      </div>

      {/* Retro LCD Screen */}
      <div className="border-4 border-black bg-[#9bbc0f] p-3 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] font-mono text-black relative overflow-hidden">
        {/* LCD Header */}
        <div className="flex justify-between items-center text-[0.65rem] border-b-2 border-black/30 pb-1 font-bold">
          <span>PET: SHAI-BOT</span>
          <span>EP:{epochs}</span>
        </div>

        {/* Animated Creature Screen */}
        <div className="h-24 flex flex-col items-center justify-center relative my-1">
          {/* Floating Action Effect */}
          {mood === 'eating' && (
            <div className="absolute top-0 text-xs animate-bounce font-bold">
              📄 GPU_DATA
            </div>
          )}
          {mood === 'happy' && (
            <div className="absolute top-0 text-xs animate-bounce font-bold text-red-900">
              ♥ ♥ ♥
            </div>
          )}
          {mood === 'training' && (
            <div className="absolute top-0 text-[0.65rem] animate-pulse font-bold">
              ⚡ BACKPROP ⚡
            </div>
          )}

          {/* 8-Bit Pixel Creature (Neural Bot) */}
          <div
            className={`transition-transform duration-300 ${
              animFrame === 1 ? 'translate-y-1' : '-translate-y-1'
            } ${mood === 'happy' ? 'scale-110' : ''}`}
          >
            {mood === 'training' ? (
              // Focused Training Face
              <pre className="font-mono text-xs font-black leading-none tracking-tighter text-[#0f380f]">
{`  [▀▄█▄▀]  
 ( ⌐■_■ ) 
 /| ⚡ |\\ 
  d   b  `}
              </pre>
            ) : mood === 'eating' ? (
              // Munching Face
              <pre className="font-mono text-xs font-black leading-none tracking-tighter text-[#0f380f]">
{`  [▀▄█▄▀]  
 ( ^ O ^ ) 
 /| 📄 |\\ 
  d   b  `}
              </pre>
            ) : mood === 'happy' ? (
              // Happy / Pet Face
              <pre className="font-mono text-xs font-black leading-none tracking-tighter text-[#0f380f]">
{`  \\(♥_♥)/  
  [▀▄█▄▀]  
  /| ♥ |\\  
   d   b   `}
              </pre>
            ) : (
              // Default Idle Robot Pet
              <pre className="font-mono text-xs font-black leading-none tracking-tighter text-[#0f380f]">
{`   [o_o]   
  [▀▄█▄▀]  
  /| 🧠 |\\  
   d   b   `}
              </pre>
            )}
          </div>

          {/* Subtitle speech message */}
          <div className="absolute bottom-0 text-[0.6rem] font-bold tracking-tight text-center truncate max-w-full">
            &gt; {message}
          </div>
        </div>

        {/* Stats Bars */}
        <div className="border-t-2 border-black/30 pt-1 text-[0.65rem] font-bold space-y-0.5">
          <div className="flex justify-between">
            <span>COMPUTE:</span>
            <span>{'█'.repeat(compute)}{'░'.repeat(5 - compute)}</span>
          </div>
          <div className="flex justify-between">
            <span>LOSS:</span>
            <span>{loss}</span>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-3 gap-1 mt-3">
        <button
          onClick={handleFeed}
          className="bg-yellow-300 hover:bg-black hover:text-white border-2 border-black font-mono font-bold text-[0.7rem] py-1.5 shadow-[2px_2px_0_0_#000] hover-shake click-glitch"
        >
          FEED 📄
        </button>
        <button
          onClick={handleTrain}
          className="bg-blue-300 hover:bg-black hover:text-white border-2 border-black font-mono font-bold text-[0.7rem] py-1.5 shadow-[2px_2px_0_0_#000] hover-shake click-glitch"
        >
          TRAIN 🧠
        </button>
        <button
          onClick={handlePet}
          className="bg-pink-300 hover:bg-black hover:text-white border-2 border-black font-mono font-bold text-[0.7rem] py-1.5 shadow-[2px_2px_0_0_#000] hover-shake click-glitch"
        >
          PET ♥
        </button>
      </div>
    </div>
  );
};
