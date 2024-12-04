import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/vue.svg',
    label: 'Vue',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/nextjs.svg',
    label: 'NextJS',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
];

const Skill = () => {
  return (
   <section className="section">
    <div className="container">
    <h2 className="headsection reveal-up">Skill</h2>
    <h2 className="subtitle reveal-up">Essential Tools I use</h2>
    
    <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] mt-5">
      {
        skillItem.map(({imgSrc, label, desc}, key) => (
          <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
        ))
      }
    </div>
    </div>
   </section>
  )
}

export default Skill