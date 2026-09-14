import { Link } from 'react-router-dom';
import { projects } from '../data';
import { getLinkText } from '../utils/linkUtils';

const ProjectIndex = () => {
  return (
    <div className="font-sans border-4 border-black p-4 bg-pink-100 shadow-[8px_8px_0_0_#000]">
      <header className="mb-8 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-extrabold text-blue-800 uppercase">PROJECT INDEX</h1>
        <p className="text-lg font-bold bg-green-300 inline-block px-2 border-2 border-black mt-2">
          THINGS I BUILT
        </p>
      </header>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.id} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000] hover:bg-yellow-100 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-bold text-blue-800 uppercase">
                <Link to={`/projects/${project.id}`} className="hover:bg-black hover:text-white px-1 click-glitch">
                  {project.title}
                </Link>
              </h2>
              <span className="font-mono bg-black text-white px-2 py-1 font-bold">{project.year}</span>
            </div>
            <div className="font-mono text-sm bg-yellow-200 inline-block p-1 border-2 border-black mb-2 font-bold">
              {project.subtitle}
            </div>
            <p className="font-bold line-clamp-2 mb-4 text-black text-base">
              {project.description}
            </p>
            
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="retro-sticker yellow text-sm click-glitch py-1">
                [ {getLinkText(project.link).toUpperCase()} ]
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectIndex;
