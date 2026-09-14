import { Link, Outlet, useLocation } from 'react-router-dom';
import { RetroSpace } from './RetroSpace';
import { useState, useEffect } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <span>{time.toLocaleTimeString()}</span>;
};

const Layout = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME.HTM', path: '/' },
    { name: 'RESEARCH.HTM', path: '/research' },
    { name: 'PROJECTS.HTM', path: '/projects' },
    { name: 'WRITINGS.HTM', path: '/writings' },
    { name: 'RANDOM.HTM', path: '/random' },
    { name: 'ABOUT.HTM', path: '/about' },
    { name: 'CV.HTM', path: '/cv' },
    { name: 'CONTACT.HTM', path: '/contact' },
  ];

  const currentTabName = location.pathname === '/' 
    ? 'INDEX.HTM' 
    : location.pathname.substring(1).split('/')[0].toUpperCase() + '.HTM';

  return (
    <>
      <RetroSpace />
      
      <div className="min-h-screen p-2 md:p-4 flex flex-col md:flex-row gap-4 relative z-10 max-w-[1400px] mx-auto">
        
        {/* Sidebar - The 2000s Zone */}
        <aside className="w-full md:w-64 flex flex-col gap-4">
          
          {/* Navigation Window */}
          <div className="retro-window p-4">
            <div className="retro-window-header bg-blue-800">
              <span>NAVIGATION</span>
              <span>_ □ X</span>
            </div>
            <nav>
              <ul className="flex flex-col gap-2 font-mono text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block p-1 border border-transparent hover:border-black hover-shake click-glitch ${
                        location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                          ? 'bg-blue-600 text-white font-bold'
                          : 'hover:bg-yellow-200'
                      }`}
                    >
                      &gt; {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* SYS Monitor Window */}
          <div className="retro-window bg-black text-green-400 text-left p-4 overflow-hidden">
            <div className="retro-window-header bg-blue-800 text-white">
              <span>SYS.MONITOR</span>
              <span>_</span>
            </div>
            
            <div className="font-mono text-[0.65rem] leading-tight mb-4 mt-2 opacity-80 h-32 overflow-hidden flex flex-col justify-end">
              <div className="animate-pulse">
                &gt; LOADING ATTENTION HEADS...<br/>
                &gt; L0H4: ACTIVATION [0.992]<br/>
                &gt; TRACING INDUCTION CIRCUIT...<br/>
                &gt; PAPER_TO_ANYTHING: ONLINE<br/>
                &gt; AWAITING INPUT... █
              </div>
            </div>

            {/* Live Clock */}
            <div className="border-t-2 border-green-800 pt-2 text-center mt-2">
              <p className="font-mono text-xs font-bold mb-1 tracking-widest text-green-600">SYS_TIME</p>
              <div className="inline-block border border-green-500 bg-black text-green-400 font-mono font-bold text-lg px-2 shadow-[2px_2px_0_0_#22c55e]">
                <LiveClock />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area with Tabs */}
        <main className="flex-1 flex flex-col min-h-[80vh]">
          
          {/* Tab Bar */}
          <div className="flex px-4 pt-2 -mb-[4px] z-10 gap-2">
            <div className="bg-blue-800 text-white font-bold font-sans px-4 py-2 border-4 border-b-0 border-black flex items-center gap-4">
              <span>/{currentTabName}</span>
              <span className="cursor-pointer hover:text-red-400">X</span>
            </div>
            <div className="bg-gray-300 text-gray-500 font-bold font-sans px-4 py-2 border-4 border-b-0 border-black flex items-center mt-2 cursor-pointer hover:bg-gray-200">
              + NEW_TAB
            </div>
          </div>
          
          <div className="retro-window main-content-window bg-white p-4 md:p-6 h-full border-t-4 border-black relative">
            <Outlet />
          </div>
          
        </main>

      </div>
    </>
  );
};

export default Layout;
