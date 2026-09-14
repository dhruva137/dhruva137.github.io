import { Link, Outlet, useLocation } from 'react-router-dom';
import { RetroSpace } from './RetroSpace';
import { CyberPet } from './CyberPet';
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
          <div className="retro-window p-3 sm:p-4">
            <div className="retro-window-header bg-blue-800">
              <span>NAVIGATION</span>
              <span>_ □ X</span>
            </div>
            <nav>
              <ul className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-col gap-2 font-mono text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block p-1.5 sm:p-1 border border-transparent text-center md:text-left hover:border-black hover-shake click-glitch ${
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

          {/* CyberPet Tamagotchi */}
          <CyberPet />

          {/* Live System Clock */}
          <div className="retro-window p-2 bg-black text-center border-4 border-black">
            <p className="font-mono text-[0.65rem] font-bold tracking-widest text-green-500 mb-0.5">LOCAL_TIME</p>
            <div className="inline-block text-green-400 font-mono font-bold text-sm sm:text-base tracking-wider">
              <LiveClock />
            </div>
          </div>
        </aside>

        {/* Main Content Area with Tabs */}
        <main className="flex-1 flex flex-col min-h-[80vh] min-w-0">
          
          {/* Tab Bar */}
          <div className="flex px-2 sm:px-4 pt-2 -mb-[4px] z-10 gap-2 overflow-x-auto">
            <div className="bg-blue-800 text-white font-bold font-sans px-3 sm:px-4 py-1.5 sm:py-2 border-4 border-b-0 border-black flex items-center gap-3 sm:gap-4 text-sm sm:text-base whitespace-nowrap">
              <span>/{currentTabName}</span>
              <span className="cursor-pointer hover:text-red-400">X</span>
            </div>
            <div className="bg-gray-300 text-gray-500 font-bold font-sans px-3 sm:px-4 py-1.5 sm:py-2 border-4 border-b-0 border-black flex items-center mt-1 sm:mt-2 cursor-pointer hover:bg-gray-200 text-xs sm:text-sm whitespace-nowrap">
              + NEW_TAB
            </div>
          </div>
          
          <div className="retro-window main-content-window bg-white p-3 sm:p-5 md:p-6 h-full border-t-4 border-black relative">
            <Outlet />
          </div>
          
        </main>

      </div>
    </>
  );
};

export default Layout;
