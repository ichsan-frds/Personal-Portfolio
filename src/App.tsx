import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkExperience from './components/WorkExperience';
import OrganizationalExperience from './components/OrganizationalExperience';
import DataProjects from './components/DataProjects';
import SoftdevProjects from './components/SoftDevProjects.tsx';
import Certifications from './components/Certifications.tsx';
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdDataThresholding } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";
import { IoDocumentsOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function App() {
  const [activeExp, setActiveExp] = useState<'work' | 'organizational'>('work');
  const [activeProject, setActiveProject] = useState<'data' | 'softdev'>('data');
  
  useEffect(() => {
      const sections = document.querySelectorAll<HTMLElement>(".text-color-change");
      if (!sections.length) return;

      let current = 0;
      let interval: ReturnType<typeof setInterval> | null = null;

      const loopEffect = () => {
        sections.forEach((s) => s.classList.remove("invert"));

        const target = sections[current];
        if (target) target.classList.add("invert");

        setTimeout(() => {
          if (target) target.classList.remove("invert");
        }, 2000);

        current = (current + 1) % sections.length;
      };

      loopEffect();
      interval = setInterval(loopEffect, 2000);

      return () => {
        if (interval) clearInterval(interval);
      };
}, []);
  
  return (
    <div className="max-w-[900px] mx-auto">
      <Header />
      <main>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 px-8 pt-16'>
              <div className='col-span-1 space-y-4'>
                  <p className='text-slate-600 font-medium'>Welcome Strangers!</p>
                  <h1 className='text-4xl font-medium'>I'm Ichsan, a Data Enthusiast from Indonesia</h1>
                  <div className='flex gap-x-4 text-slate-600'>
                      <span className='flex gap-x-2'><GiArtificialIntelligence size={24}/>Data Science</span>
                      <span className='flex gap-x-2'><MdDataThresholding size={24}/>Data Analysis</span>
                  </div>
                  <p className='text-slate-600'>Universitas Padjajaran Undergraduate driven by a deep curiosity about how the world works and how technology fits into it.
                    I believe that learning never truly ends, and I aim to use my skills and experiences to empower others and contribute meaningfully to the world around me.
                  </p>
                  <div className='grid grid-cols-1 sm:grid-cols-2 justify-self-center gap-4'>
                    <Dialog>
                          <DialogTrigger asChild>
                              <button className='flex justify-center gap-x-2 col-span-1 bg-red-300 hover:scale-105 transition-transform duration-300 rounded-full p-3 font-semibold cursor-pointer'>
                                View My CV <IoDocumentsOutline size={24} />
                              </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl h-[90vh] p-6">
                              <DialogHeader>
                                  <DialogTitle className="text-2xl">Curriculum Vitae</DialogTitle>
                              </DialogHeader>
                              <div className="mt-4 w-full h-[70vh]">
                                  <iframe
                                      src="https://docs.google.com/file/d/1owpLjB8knBz_DESHeCo7DxpIAbt9Is3t/preview"
                                      className="w-full h-full border rounded-md"
                                      title="CV PDF"
                                  />
                              </div>
                          </DialogContent>
                    </Dialog>
                    <a href="#connect" className='flex justify-center gap-x-2 col-span-1 border border-slate-400 hover:bg-black hover:text-white transition-colors duration-500 rounded-full p-3 font-semibold cursor-pointer'>Get In Touch<PiHandshake size={24}/></a>
                  </div>
              </div>
              <div className='flex flex-col sm:grid sm:grid-cols-3 md:flex md:flex-col gap-4 sm:gap-8 pt-14'>
                  <img 
                  className="relative overflow-hidden rounded-2xl shadow-lg bg-slate-200 w-full object-cover sm:max-md:w-[176px] sm:max-md:h-[264px] md:w-[324px] md:h-[231px] hover:scale-110 transition-transform duration-300" 
                  src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/LandscapeIchsan.png" alt="Ichsan 1" />
                  <div className='grid grid-cols-2 sm:contents md:flex gap-4 sm:gap-8 md:ml-8'>
                    <div className='relative overflow-hidden rounded-2xl shadow-lg bg-slate-200 sm:max-md:w-[176px] sm:max-md:h-[264px] md:w-[176px] md:h-[264px] hover:scale-110 transition-transform duration-300'>
                        <img className="min-h-full min-w-full object-cover" src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/PotraitIchsan1.png" alt="Ichsan 2" />
                    </div>
                    <div className='relative overflow-hidden rounded-2xl shadow-lg bg-slate-200 sm:max-md:w-[176px] sm:max-md:h-[264px] md:w-[176px] md:h-[264px] hover:scale-110 transition-transform duration-300'>
                        <img className="min-h-full min-w-full object-cover" src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/PotraitIchsan2.png" alt="Ichsan 3" />
                    </div>
                  </div>
              </div>
          </div>
          <div className='flex-col items-center justify-center px-8 py-32 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
            <h2 className='text-color-change text-slate-300'>I love finding hidden patterns.</h2>
            <h2 className='text-color-change text-slate-300'>I love transforming curiosity into solutions.</h2>
            <h2 className='text-color-change text-slate-300'>I love making something that matters.</h2>
            <h2 className='text-color-change justify-self-center text-slate-300 pt-8'>I love coding.</h2></div>
          <div className='px-8 space-y-8 pb-16'>
            <h1 id="experience" className='text-3xl font-bold tracking-tight'>Experience</h1>
            <div className='text-lg text-slate-600 leading-7 tracking-wide'>
              <h2>"Be thankful for everything that happens in your life; it’s all an <span className='text-red-300'>experience</span>."</h2>
              <h2 className='justify-self-end'>- Roy T. Bennett</h2>
            </div>
            <div className="flex border-slate-600 border rounded-full overflow-hidden text-sm justify-evenly my-8">
                <button
                  onClick={() => setActiveExp('work')}
                  className={`px-6 py-2 font-semibold transition-all duration-300 w-full cursor-pointer ${
                    activeExp === 'work'
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  Work
                </button>
                <button
                  onClick={() => setActiveExp('organizational')}
                  className={`px-6 py-2 font-semibold transition-all duration-300 w-full cursor-pointer ${
                    activeExp === 'organizational'
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  Organizational
                </button>
              </div>
              {activeExp === 'work' && <WorkExperience />}
              {activeExp === 'organizational' && <OrganizationalExperience />}
          </div>
          <div className='px-8 space-y-4'>
              <h1 id="projects" className='text-3xl font-bold tracking-tight'>Projects</h1>
              <div className='text-lg text-slate-600 leading-7 tracking-wide'>
                <h2>"The best way to get a <span className='text-red-300'>project</span> done faster is to start sooner."</h2>
                <h2 className='justify-self-end'>- Jim Highsmith</h2>
              </div>
              <div className="flex border-slate-600 border rounded-full overflow-hidden text-sm justify-evenly my-8">
                  <button
                    onClick={() => setActiveProject('data')}
                    className={`px-6 py-2 font-semibold transition-all duration-300 w-full cursor-pointer ${
                      activeProject === 'data'
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    Data
                  </button>
                  <button
                    onClick={() => setActiveProject('softdev')}
                    className={`px-6 py-2 font-semibold transition-all duration-300 w-full cursor-pointer ${
                      activeProject === 'softdev'
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    Software Dev
                  </button>
              </div>
              {activeProject === 'data' && <DataProjects />}
              {activeProject === 'softdev' && <SoftdevProjects />}
          </div>
          <div className='px-8 space-y-8 pb-16'>
              <h1 id="certifications" className='text-3xl font-bold tracking-tight'>Certifications</h1>
              <div className='text-lg text-slate-600 leading-7 tracking-wide'>
                  <h2>"I am always ready to <span className='text-red-300'>learn</span> although I do not always like being taught."</h2>
                  <h2 className='justify-self-end'>- Winston Churchill</h2>
              </div>
              <Certifications/>
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
