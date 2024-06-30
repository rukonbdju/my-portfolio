const Skills = () => {

    const skills = ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "C++", "Javascript", "Python", "React", "Next Js", "Node Js", "Express", "Firebase", "Git & Github", "JWT", "MongoDB", "Redux"]

    return (
        <div id="skills" className="mt-32">
            <section>
                <header className="my-16">
                    <h4 className="text-2xl text-red-500 text-center">My Skills</h4>
                    <h1 className="text-4xl text-tcolor my-2 font-bold text-center">Technologies I am Working With</h1>
                </header>
            </section>
            <section className="flex flex-wrap justify-center items-center gap-4 w-4/5 mx-auto my-10 border-2 border-dashed rounded-xl border-red-300 p-10 bg-white/5">

                {
                    skills.map((skill, index) => <div key={index} className="bg-red-200/5 text-tcolor p-5 rounded-xl shadow-md">
                        <p className="text-sm font-bold">{skill}</p>
                    </div>)
                }
            </section>
        </div>
    )
}
export default Skills