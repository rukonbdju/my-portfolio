const Project = ({ project }) => {
    return (
        <div className="p-4 border border-tcolor bg-white/5 rounded-lg hover:border-red-500 group">
            <section className="mb-5 relative">
                <div className="hidden group-hover:flex flex-wrap gap-4 justify-end absolute right-2 bottom-2">
                    <a href={project.liveLink} className="mt-5 text-xs bg-red-500 px-3 py-1 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Live Link</a>
                    <a href={project.codeLink} className="mt-5 text-xs bg-red-500 px-3 py-1 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Code Link</a>
                </div>
                <div>
                    <img src={project.image} alt="" />
                </div>

            </section>
            <section>
                <div>
                    <h1 className="text-xl text-tcolor">{project.title}</h1>
                    <p className="text-md text-tcolor my-4">{project.summary}</p>
                </div>
                <div className=" flex flex-wrap gap-4">
                    {project.technologies.map((item) => <p key={item} className="px-2 text-sm py-1 bg-red-200 rounded-full">{item}</p>)}
                </div>

            </section>
        </div>
    )
}
export default Project