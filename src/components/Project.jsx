import ProjectCard from './ProjectCard';
const projects = [
    {
        imgSrc: '/images/project-present-1.jpg',
        title: 'Timebox',
        desc: 'Senior project',
        tech: ['/images/react.svg', '/images/nodejs.svg', '/images/expressjs.svg', '/images/mysql.svg'],
        tags: ['Design', 'Development'],
        projectLink: [
            {
                link: 'https://github.com/kengserch/Senior-Project',
                icon: '/images/github.svg',
            },
            {
                link: 'https://www.youtube.com/watch?v=ZVhwValIuUY',
                icon: '/images/youtube.svg',
            },
        ],
    },
    {
        imgSrc: '/images/project-present-2.jpg',
        title: 'TPFC',
        desc: 'Internship project',
        tech: ['/images/html.svg', '/images/css3.svg', '/images/javascript.svg'],
        tags: ['Development'],
        projectLink: [
            {
                link: 'https://github.com/kengserch/tpfc-internship-project',
                icon: '/images/github.svg',
            },
        ],
    },
    {
        imgSrc: '/images/project-present-3.jpg',
        title: 'Mahasarn Craft',
        desc: 'Internship project',
        tech: ['/images/html.svg', '/images/css3.svg', '/images/javascript.svg'],
        tags: ['Development'],
        projectLink: [
            {
                link: 'https://github.com/kengserch/mahasarncraft-internship-project',
                icon: '/images/github.svg',
            },
        ],
    },
    {
        imgSrc: '/images/project-present-8.jpg',
        title: 'Logistic Website',
        desc: 'Freelance project',
        tech: ['/images/html.svg', '/images/css3.svg', '/images/javascript.svg'],
        tags: ['Development'],
        projectLink: [
            {
                link: 'https://github.com/kengserch/logistic-website',
                icon: '/images/github.svg',
            },
        ],
    },
    {
        imgSrc: '/images/project-present-4.jpg',
        title: 'New balance (clone)',
        desc: 'Practice project',
        tech: ['/images/nextjs.svg', '/images/tailwindcss.svg'],
        tags: ['Development'],
        projectLink: [
            {
                link: 'https://newbalance-clone-ps.netlify.app/',
                icon: '/images/link.svg',
            },
            {
                link: 'https://github.com/kengserch/newbalance-clone',
                icon: '/images/github.svg',
            },
        ],
    },
    {
        imgSrc: '/images/project-present-5.jpg',
        title: 'eCommerce website',
        desc: 'Practice project',
        tech: ['/images/vue.svg', '/images/tailwindcss.svg', '/images/firebase.svg'],
        tags: ['Development', 'API'],
        projectLink: [
            {
                link: 'https://nb-sneaker-shop.web.app/',
                icon: '/images/link.svg',
            },
            {
                link: 'https://github.com/kengserch/vue-easy-commerce',
                icon: '/images/github.svg',
            },
        ],
    },
    {
        imgSrc: '/images/project-present-6.jpg',
        title: 'Weather Website',
        desc: 'Practice project',
        tech: ['/images/html.svg', '/images/css3.svg', '/images/javascript.svg', '/images/tailwindcss.svg'],
        tags: ['Design', 'Development', 'API'],
        projectLink: [
            {
                link: 'https://weather-app-prasert.vercel.app/',
                icon: '/images/link.svg',
            },
            {
                link: 'https://github.com/kengserch/weather-app',
                icon: '/images/github.svg',
            },
        ],
    },
    {
        imgSrc: '/images/project-present-7.jpg',
        title: 'Pokedex Website',
        desc: 'Practice project',
        tech: ['/images/html.svg', '/images/css3.svg', '/images/javascript.svg', '/images/tailwindcss.svg'],
        tags: ['Design', 'Development', 'API'],
        projectLink: [
            {
                link: 'https://pokemon-web-prasert.vercel.app/',
                icon: '/images/link.svg',
            },
            {
                link: 'https://github.com/kengserch/pokemon-web',
                icon: '/images/github.svg',
            },
        ],
    },
];

const Project = () => {
    return (
        <section id="project" className="section">
            <div className="container">
                <h2 className="headsection reveal-up">My Project</h2>
                <h2 className="subtitle reveal-up">Some of my Work</h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] mt-5">
                    {projects.map(({ imgSrc, title, desc, tech, tags, projectLink }, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} desc={desc} tech={tech} tags={tags} projectLink={projectLink} classes="reveal-up" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
