import Project from "./Project"

const Projects = () => {
    const projects=[
        {
            id:1,
            title:"Background Matrix Rain",
            summary:"This is a website summary This is a website summary This is a website summary",
            technologies:["HTML","CSS"],
            liveLink:"",
            codeLink:""
        },
        {
            id:2,
            title:"Background Matrix Rain",
            summary:"This is a website summary This is a website summary This is a website summary",
            technologies:["HTML","CSS"],
            liveLink:"",
            codeLink:""
        },
        {
            id:3,
            title:"Background Matrix Rain",
            summary:"This is a website summary This is a website summary This is a website summary",
            technologies:["HTML","CSS"],
            liveLink:"",
            codeLink:""
        },
        {
            id:4,
            title:"Background Matrix Rain",
            summary:"This is a website summary This is a website summary This is a website summary",
            technologies:["HTML","CSS"],
            liveLink:"",
            codeLink:""
        },
        {
            id:5,
            title:"Background Matrix Rain",
            summary:"This is a website summary This is a website summary This is a website summary",
            technologies:["HTML","CSS"],
            liveLink:"",
            codeLink:""
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