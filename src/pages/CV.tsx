const CV = () => {
  return (
    <div className="font-sans border-4 border-black p-3 sm:p-6 md:p-8 bg-gray-200 shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000]">
      <div className="flex justify-between items-center mb-4 sm:mb-8 border-b-4 border-black pb-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 uppercase">MY RESUME.TXT</h1>
      </div>
      
      <div className="bg-black p-3 sm:p-6 border-4 border-white font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-green-400 whitespace-pre-wrap break-words">
{`================================================================================
DHRUVA P GOWDA
BENGALURU, INDIA
================================================================================

>> EDUCATION
--------------------------------------------------------------------------------
B.E. Computer Science and Engineering
Bengaluru | Oct 2025 - present

>> EXPERIENCE
--------------------------------------------------------------------------------
City Organiser & Researcher @ TARA (Aug 2026 - present)
- Working on mechanistic interpretability, attention steering, and transformer internals.
- Running the Bangalore cohort.

Head Researcher @ Basalt Research & Technologies (Feb 2026 - Jun 2026)
- Led quantitative research on NIFTY-50, derivatives, and FX.
- Developed systematic trading strategies and maintained backtesting infrastructure.

>> SKILLS
--------------------------------------------------------------------------------
Programming   : Python, C, C++, TypeScript/JavaScript
ML/AI         : PyTorch, scikit-learn, XGBoost, Reinforcement Learning
AI Safety     : Mechanistic interpretability
Maths         : Probability & Statistics, Linear Algebra, Real Analysis

================================================================================
END OF FILE
================================================================================`}
      </div>
    </div>
  );
};

export default CV;
