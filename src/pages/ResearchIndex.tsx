import { Link } from 'react-router-dom';
import { research } from '../data';
import { getLinkText } from '../utils/linkUtils';

const ResearchIndex = () => {
  return (
    <div className="font-sans border-4 border-black p-3 sm:p-4 bg-cyan-100 shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000]">
      <header className="mb-6 sm:mb-8 border-b-4 border-black pb-3 sm:pb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 uppercase">RESEARCH INDEX</h1>
        <p className="text-base sm:text-lg font-bold bg-yellow-300 inline-block px-2 border-2 border-black mt-2">
          PAPERS & PREPRINTS
        </p>
      </header>
      
      <div className="space-y-6">
        {research.map((item) => (
          <article key={item.id} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000] hover:bg-yellow-100 transition-colors">
            <h2 className="text-2xl font-bold text-blue-800 uppercase mb-2">
              <Link to={`/research/${item.id}`} className="hover:bg-black hover:text-white px-1 click-glitch">
                {item.title}
              </Link>
            </h2>
            <div className="font-mono text-sm bg-gray-200 inline-block p-1 border-2 border-black mb-2 font-bold">
              {item.authors} | {item.venue} ({item.year})
            </div>
            <p className="font-bold line-clamp-2 mb-4 text-black text-base">
              {item.description}
            </p>
            
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="retro-sticker blue text-sm click-glitch py-1">
                [ {getLinkText(item.link).toUpperCase()} ]
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ResearchIndex;
