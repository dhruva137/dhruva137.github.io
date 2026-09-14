const About = () => {
  return (
    <div className="font-sans border-4 border-black p-4 md:p-8 bg-orange-100 shadow-[8px_8px_0_0_#000]">
      <h1 className="text-4xl font-extrabold text-blue-800 uppercase mb-8 border-b-4 border-black inline-block pb-2">
        ABOUT ME
      </h1>
      
      <div className="space-y-6 text-xl font-bold leading-relaxed bg-white p-6 border-4 border-black">
        <p>
          I'm Dhruva. I'm 20, from Bengaluru, India, currently pursuing my undergrad in Computer Science.
        </p>
        
        <p>
          I got obsessed with deep maths early and then somewhere along the way fell into the rabbit hole of what intelligence actually is. Not the "let's train a bigger model" kind. The "can we write down what this thing is doing and prove properties about it" kind. Simulations, formal structures, mechanistic interpretability.
        </p>

        <p>
          I think a lot about ASI. Not in the sci-fi way, but the "this might actually happen in our lifetime and we're wildly unprepared" way. That's what pulled me into AI safety. I'm working through the ARENA curriculum at <span className="bg-yellow-300 px-1 border-2 border-black">TARA Bangalore</span> — attention steering, transformer internals, RL from an alignment perspective. I also run the Bangalore cohort as City Organiser.
        </p>

        <p>
          Lately I've been going down the longevity and genetics rabbit hole too. Somatic reversion, mutational supply models, what happens when you try to reason about biology the way you'd reason about a dynamical system. I built <a href="https://github.com/dhruva137/revertome" target="_blank" rel="noopener noreferrer" className="bg-blue-200 px-1 hover:bg-black hover:text-white border-2 border-black">Revertome</a> out of that curiosity.
        </p>

        <p>
          I'm also founding something called <a href="https://papertoanything.com" target="_blank" rel="noopener noreferrer" className="bg-pink-300 px-1 hover:bg-black hover:text-white border-2 border-black">PaperToAnything</a>. It's still in the baby stage — a research platform connecting papers to the systems they became, with concept maps and vocabulary scaffolding for deep technical understanding.
        </p>
      </div>

      <div className="mt-8 bg-black text-white p-4 border-4 border-red-600">
        <p className="text-xl font-bold">
          Feel free to email me if you guys want to have a meet during the weekend or during the week time. I'm not really free during the week time but I can make some time in the evening. Just <a href="mailto:dhruvapgowda.work@gmail.com" className="text-yellow-400 hover:text-red-400 underline">email me</a> and I will send you an invite or something.
        </p>
      </div>
    </div>
  );
};

export default About;
