const ProjectCard = ({ imgSrc, title, desc, tech, tags, projectLink, classes }) => {
    return (
        <div className={'relative p-4 rounded-2xl bg-zinc-800 cursor-default hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' + classes}>
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
            </figure>
            <div className="flex items-center gap-4">
                <div>
                    <h3 className="project-title">{title}</h3>
                    <h3 className="project-desc mb-2">{desc}</h3>

                    <div className="flex gap-2 mb-4">
                        {tech.map((label, key) => (
                            <figure key={key} className="bg-zinc-700/50 rounded-lg overflow-hidden w-9 h-9 p-2 group-hover:bg-zinc-900 transition-colors">
                                <img src={label} alt={label} width={32} height={32} />
                            </figure>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                        {tags.map((label, key) => (
                            <span key={key} className="h-6 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 gap-2 justify-end">
                 {projectLink.map((link, key) => (
                     <div key={key} className="w-10 h-8 rounded-lg grid place-items-center bg-cyan-400 text-zinc-950">
                         <a href={link.link} key={key} target="_blank" className="cursor-pointer">
                             <img src={link.icon} alt={''} width={20} height={20} />
                         </a>
                     </div>
                 ))}
               </div>

               
            </div>
            {/* <a href={projectLink} target="_blank" className="absolute inset-0"></a> */}
        </div>
    );
};

export default ProjectCard;
