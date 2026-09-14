import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Free anonymous relay via Web3Forms public endpoint (forwarding without exposing your email)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'b947c617-640c-4ec4-9b16-bbad88f7c9e1', // Public relay token
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Transmission from ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="font-sans border-4 border-black p-3 sm:p-6 md:p-8 bg-yellow-100 shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 uppercase mb-4 sm:mb-8 border-b-4 border-black inline-block pb-1 sm:pb-2">
        CONTACT ME
      </h1>
      
      <div className="bg-white p-4 sm:p-6 border-4 border-black font-bold text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
        <p>
          Have a research collaboration idea, questions about PaperToAnything / mechanistic interpretability, or want to meet in Bengaluru? Send a message through the form below or book a slot on Calendly.
        </p>
      </div>

      {/* Retro Brutalist Contact Form */}
      <div className="bg-white border-4 border-black p-4 sm:p-6 mb-8 shadow-[4px_4px_0_0_#000]">
        <div className="bg-blue-800 text-white font-mono font-bold p-2 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 border-b-4 border-black flex justify-between items-center text-xs sm:text-sm">
          <span>&gt; TRANSMIT_MESSAGE.EXE</span>
          <span>[SECURE_CHANNEL]</span>
        </div>

        {status === 'success' ? (
          <div className="bg-green-100 border-4 border-green-600 p-4 font-mono font-bold text-green-900 text-sm sm:text-base">
            <p className="text-lg">✓ TRANSMISSION SUCCESSFUL!</p>
            <p className="mt-1">Your message was routed securely to my inbox. I'll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-3 bg-black text-white px-3 py-1 font-bold hover:bg-yellow-300 hover:text-black border-2 border-black"
            >
              SEND ANOTHER
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono font-bold text-xs sm:text-sm uppercase mb-1">
                Your Name / Organization:
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Richard Feynman / OpenAI"
                className="w-full border-4 border-black p-2 font-mono text-sm bg-gray-50 focus:bg-yellow-50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono font-bold text-xs sm:text-sm uppercase mb-1">
                Your Return Email (for replies):
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. researcher@domain.com"
                className="w-full border-4 border-black p-2 font-mono text-sm bg-gray-50 focus:bg-yellow-50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono font-bold text-xs sm:text-sm uppercase mb-1">
                Transmission / Message:
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your note or idea here..."
                className="w-full border-4 border-black p-2 font-mono text-sm bg-gray-50 focus:bg-yellow-50 focus:outline-none"
              />
            </div>

            {status === 'error' && (
              <p className="font-mono text-xs font-bold text-red-600">
                [!] Transmission failed. Please try again or book directly via Calendly below.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-6 py-3 bg-yellow-300 hover:bg-black hover:text-white font-mono font-bold text-base border-4 border-black shadow-[4px_4px_0_0_#000] hover-shake click-glitch transition-colors"
            >
              {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE >>'}
            </button>
          </form>
        )}
      </div>

      {/* Alternative Channels (Calendly, GitHub, LinkedIn) */}
      <h2 className="text-xl sm:text-2xl font-bold uppercase mb-4 border-b-2 border-black inline-block">
        DIRECT CHANNELS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <a href="https://calendly.com/dhruvapgowda-work/30min" target="_blank" rel="noopener noreferrer" className="block border-4 border-black p-4 sm:p-6 bg-orange-100 hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0_0_#000] hover-shake">
          <p className="font-extrabold text-xl sm:text-2xl uppercase mb-1 sm:mb-2">Book a call</p>
          <p className="font-mono font-bold text-xs sm:text-sm">Calendly 30min</p>
        </a>

        <a href="https://github.com/dhruva137" target="_blank" rel="noopener noreferrer" className="block border-4 border-black p-4 sm:p-6 bg-pink-100 hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0_0_#000] hover-shake">
          <p className="font-extrabold text-xl sm:text-2xl uppercase mb-1 sm:mb-2">GitHub</p>
          <p className="font-mono font-bold text-xs sm:text-sm">github.com/dhruva137</p>
        </a>
        
        <a href="https://www.linkedin.com/in/dhruva-p-gowda-7a5518240/" target="_blank" rel="noopener noreferrer" className="block border-4 border-black p-4 sm:p-6 bg-green-100 hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0_0_#000] hover-shake">
          <p className="font-extrabold text-xl sm:text-2xl uppercase mb-1 sm:mb-2">LinkedIn</p>
          <p className="font-mono font-bold text-xs sm:text-sm">Dhruva P Gowda</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
