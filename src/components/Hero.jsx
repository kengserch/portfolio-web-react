import { ButtonPrimary, ButtonOutline } from "./Button"

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center grid grid-flow-row md:grid-flow-col md:grid-cols-2  lg:gap-10">
        <div className="">
          <div className="flex items-center gap-3 ">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src="/images/avatar.jpg" 
              width={40}
              height={40}
              alt="Prasert Saengkaew portrait"
              className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                <span>Available for work</span>
            </div>
          </div>

          <h2 className="headline-1 text-center md:text-start max-w-[15ch] sm:max-w-[50ch] mt-5 mb-8 lg:mb-10">
          A passionate Frontend Developer Intern with a drive to create exceptional
          </h2>
          <div className="flex items-center justify-center gap-3 md:justify-start" >
              <ButtonPrimary
              label="Download CV"
              icon="download"
              href="https://shorturl.at/OCJJN"
              target="_blank"
              />
               <ButtonPrimary
              label="Full Portfolio"
              icon="download"
              href="https://shorturl.at/N79z3"
              target="_blank"
              />

            {/* <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            /> */}
          </div>

        </div>
        <div className="mt-20 md:mt-0 flex items-center justify-center w-full">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-cyan-400 via-25% via-cyan-400/40 to-65% rounded-full md:rounded-[80px] overflow-hidden">
            <img 
            src="/images/hero-banner2.png"
            width={656}
            height={800} 
            alt="Prasert Saengkaew" 
            className="w-full" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero