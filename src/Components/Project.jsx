const Project=({project})=>{
    return(
        <div className="p-4 border-2 rounded-lg border-red-500">
            <section className="mb-5">
                <div>
                    <img src={project.image} alt="" />
                </div>
            </section>
            <section>
                <div>
                    <h1 className="text-xl">{project.title}</h1>
                    <p className="text-md my-4">{project.summary}</p>
                </div>
                <div className=" flex flex-wrap gap-4">
                    {project.technologies.map((item)=><p key={item} className="px-3 py-1 bg-red-200 rounded-full">{item}</p>)}
                </div>
                <div className="flex flex-wrap gap-4 justify-end">
                    <a href={project.liveLink} className="mt-5 text-md bg-red-500 px-5 py-3 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Live Link</a>
                    <a href={project.codeLink} className="mt-5 text-md bg-red-500 px-5 py-3 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Code Link</a>
                </div>
            </section>
        </div>
    )
}
export default Project