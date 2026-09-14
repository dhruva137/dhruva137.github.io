const Contact = () => {
  return (
    <div className="font-sans border-4 border-black p-3 sm:p-6 md:p-8 bg-yellow-100 shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 uppercase mb-4 sm:mb-8 border-b-4 border-black inline-block pb-1 sm:pb-2">
        CONTACT ME
      </h1>
      
      <div className="bg-white p-4 sm:p-6 border-4 border-black font-bold text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
        <p>
          Feel free to email me if you guys want to have a meet during the weekend or during the week time. I'm not really free during the week time but I can make some time in the evening. Just email me and I will send you an invite or something.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <a href="mailto:dhruvapgowda.work@gmail.com" className="block border-4 border-black p-4 sm:p-6 bg-blue-100 hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0_0_#000]">
          <p className="font-extrabold text-xl sm:text-2xl uppercase mb-1 sm:mb-2">Email</p>
          <p className="font-mono font-bold text-xs sm:text-sm break-all">dhruvapgowda.work@gmail.com</p>
        </a>
        
        <a href="https://github.com/dhruva137" target="_blank" rel="noopener noreferrer" className="block border-4 border-black p-6 bg-pink-100 hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0_0_#000]">
          <p className="font-extrabold text-2xl uppercase mb-2">GitHub</p>
          <p className="font-mono font-bold">github.com/dhruva137</p>
        </a>
        
        <a href="https://www.linkedin.com/in/dhruva-p-gowda-7a5518240/" target="_blank" rel="noopener noreferrer" className="block border-4 border-black p-6 bg-green-100 hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0_0_#000]">
          <p className="font-extrabold text-2xl uppercase mb-2">LinkedIn</p>
          <p className="font-mono font-bold">Dhruva P Gowda</p>
        </a>

        <a href="https://calendly.com/dhruvapgowda-work/30min" target="_blank" rel="noopener noreferrer" className="block border-4 border-black p-6 bg-orange-100 hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0_0_#000]">
          <p className="font-extrabold text-2xl uppercase mb-2">Book a call</p>
          <p className="font-mono font-bold">Calendly 30min</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
