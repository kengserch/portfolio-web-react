const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="headsection">Experience</h2>
                <h2 className="subtitle">History the Work</h2>
                <div className="bg-zinc-800/50 p-7 mt-5 rounded-2xl md:p-12 reveal-up">
                    <div className="grid auto-rows-auto md:grid-flow-col md:auto-cols-auto bg-zinc-600/25 p-5 rounded-xl h-full">
                        <div className="flex flex-col justify-center py-4 md:px-8 w-full border-b-4 md:border-r-4 md:border-b-0 border-zinc-400/20">
                          <p className="text-2xl text-white md:text-4xl">2022</p>
                          <p className="text-white">April-July</p>
                        </div>
                        <div className="flex flex-col justify-center py-4 gap-2 md:px-8">
                          <p className="text-2xl text-white md:text-4xl">Front End Developer</p>
                          <p className="text-zinc-100"> Duck Lab Co.,Ltd. (Internship)</p>
                          <p className="text-zinc-300">Developed and implemented web applications from design requirements, Optimized pages for Responsive Website, utilizing responsive frameworks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
