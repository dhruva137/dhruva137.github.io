import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data';
import { getLinkText } from '../utils/linkUtils';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = projects.find((p) => p.id === id);

  if (!item) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="font-sans border-4 border-black p-4 bg-pink-100 shadow-[8px_8px_0_0_#000]">
      <Link to="/projects" className="inline-block bg-black text-white px-3 py-1 mb-6 font-bold hover:bg-yellow-400 hover:text-black click-glitch">
        &lt;&lt; BACK TO PROJECTS
      </Link>
      
      <article className="space-y-6">
        <header className="border-b-4 border-black pb-4">
          <h1 className="text-4xl font-extrabold text-blue-800 uppercase tracking-wider">{item.title}</h1>
          <div className="mt-2 font-mono text-black font-bold bg-yellow-200 inline-block p-1 border-2 border-black">
            TYPE: {item.subtitle}
          </div>
          <div className="mt-1 font-mono text-black font-bold bg-white inline-block p-1 border-2 border-black ml-2">
            YEAR: {item.year}
          </div>
          
          {item.link && (
            <div className="mt-6">
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-sticker yellow click-glitch px-4 py-2 text-sm"
              >
                [ {getLinkText(item.link).toUpperCase()} ]
              </a>
            </div>
          )}
        </header>

        <div className="text-lg leading-relaxed font-bold text-black">
          <p className="bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_#000]">{item.description}</p>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
