import { Link } from 'react-router-dom';
import { research, projects } from '../data';

const Home = () => {
  const featuredResearch = research.slice(0, 3);
  const featuredProjects = projects.filter(p => p.id !== 'papertoanything').slice(0, 4);

  return (
    <div className="space-y-6 sm:space-y-8 font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-800 mb-2 sm:mb-4 font-bold border-b-4 border-black inline-block leading-tight">
        WELCOME TO MY HOMEPAGE!
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
        <div className="flex-1 bg-yellow-200 border-4 border-black p-3 sm:p-4 font-bold text-base sm:text-lg shadow-[4px_4px_0_0_#000]">
          Hey, I'm Dhruva. I'm a sophomore studying computer science in Bengaluru, and I'm diving deep into the mechanics of intelligence. Right now, my focus is on mechanistic interpretability and attention steering (via ARENA at TARA Bengaluru), and building out PaperToAnything.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Research */}
        <section className="border-4 border-black p-4 bg-cyan-100 shadow-[4px_4px_0_0_#000]">
          <h2 className="text-2xl font-extrabold bg-cyan-400 text-black p-2 -mx-4 -mt-4 mb-4 border-b-4 border-black">
            LATEST RESEARCH
          </h2>
          <div className="space-y-4">
            {featuredResearch.map((item) => (
              <article key={item.id} className="border-b-2 border-dashed border-black pb-2">
                <Link to={`/research/${item.id}`} className="font-bold text-lg hover-shake click-glitch inline-block">
                  ► {item.title}
                </Link>
                <p className="text-sm font-mono mt-1 font-bold">[{item.venue}, {item.year}]</p>
              </article>
            ))}
            <div className="text-right pt-2">
              <Link to="/research" className="retro-sticker blue hover-shake">VIEW ALL RESEARCH &gt;&gt;</Link>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="border-4 border-black p-4 bg-green-100 shadow-[4px_4px_0_0_#000]">
          <h2 className="text-2xl font-extrabold bg-green-400 text-black p-2 -mx-4 -mt-4 mb-4 border-b-4 border-black">
            COOL PROJECTS
          </h2>
          <div className="space-y-4">
            {featuredProjects.map((item) => (
              <article key={item.id} className="border-b-2 border-dashed border-black pb-2">
                <Link to={`/projects/${item.id}`} className="font-bold text-lg hover-shake click-glitch inline-block">
                  ► {item.title}
                </Link>
                <p className="text-sm font-mono mt-1 font-bold">{item.subtitle}</p>
              </article>
            ))}
            <div className="text-right pt-2">
              <Link to="/projects" className="retro-sticker yellow hover-shake">VIEW ALL PROJECTS &gt;&gt;</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
