const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="headsection">About Me</h2>
                <h2 className="subtitle">Get to know me</h2>
                <div className="bg-zinc-800/50 p-7 mt-5 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 text-lg">Hi there! I'm Prasert Saengkaew a Web Developer , I enjoy transforming website designs into fully functional websites. I am passionate about web development and excited to continuously improve my coding skills. I work well in teams and possess excellent problem-solving skills. My career interests in Front-end or Back-end Development</p>
                </div>
                <div className="flex flex-col gap-2 bg-zinc-800/50 p-7 mt-5 rounded-2xl md:p-12 reveal-up">
                    <h2 className="text-2xl">Education</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 xl:flex-row lg:gap-0 justify-between">
                            <p className="text-zinc-100 text-base md:text-lg">Bachelor of Science in Information and Communication Technology</p>
                            <p className="text-zinc-100 text-base md:text-lg">Silpakorn University | 2019 - 2022</p>
                        </div>
                        <div>
                            <p className="text-zinc-300 text-base md:text-lg">Web Development and Interactive Media</p>
                            <p className="text-zinc-300 text-base md:text-lg">GPAX 3.22</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
