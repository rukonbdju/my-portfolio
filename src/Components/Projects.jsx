import Project from "./Project"
import matrix from "../assets/matrix.png"
import landing from "../assets/landing.png"
import classroom from "../assets/classroom.png"

const Projects = () => {
    const projects=[
        {
            id:1,
            title:"Matrix Rain Background",
            summary:"This is a matrix rain background website using ",
            technologies:["HTML","CSS","JavaScript"],
            liveLink:"https://rukonbdju.github.io/matrix/",
            codeLink:"https://github.com/rukonbdju/matrix",
            image:matrix
        },
        {
            id:2,
            title:"Landing Page",
            summary:"This is a landing page of a IT solution company.",
            technologies:["HTML","CSS","JavaScript"],
            liveLink:"https://rukonbdju.github.io/tech-AI/",
            codeLink:"https://github.com/rukonbdju/tech-AI",
            image:landing
        },
        {
            id:3,
            title:"Classroom Management App",
            summary:"This is a full-stack web application using mongodb database.",
            technologies:["JavaScript","Tailwind CSS","React","Express","Firebase","MongoDB","Node JS"],
            liveLink:"https://my-classroom-bd.web.app/",
            codeLink:"https://github.com/rukonbdju/my-classroom-client",
            image:classroom
        },
    ]
    return (
        <div className="mt-32">
            <header className="my-16">
                <h3 className="text-2xl text-red-500 font-bold text-center">Projects</h3>
                <h1 className="text-4xl my-2 font-bold text-center">Projects I Have Built</h1>
            </header>
            <section>
                <div className="grid grid-cols-3 gap-5 justify-between w-4/5 mx-auto">
                    {
                        projects.map(item=><Project key={item.id} project={item}></Project>)
                    }
                </div>
            </section>
        </div>
    )
}

export default Projects