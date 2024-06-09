const Skills = () => {
    return (
        <div className="my-16">
            <section>
                <header>
                    <h4 className="text-2xl text-red-500 font-bold text-center">My Skills</h4>
                    <h1></h1>

                </header>
            </section>
            <section className="grid grid-cols-3 gap-4 justify-center items-center w-4/5 mx-auto my-10 ">
                <div className="border-2 border-dashed rounded-xl border-red-500 p-10">
                    <p className="text-xl font-bold">HTML</p>
                    <p className="text-xl font-bold">CSS</p>
                    <p className="text-xl font-bold">Tailwind CSS</p>
                    <p className="text-xl font-bold">JavaScript</p>
                </div>
                <div  className="border-2 border-dashed rounded-xl border-red-500 p-10">
                    <p className="text-xl font-bold">React JS</p>
                    <p className="text-xl font-bold">Next JS</p>
                    <p className="text-xl font-bold">Node JS</p>
                    <p className="text-xl font-bold">Express JS</p>
                </div>
                <div  className="border-2 border-dashed rounded-xl border-red-500 p-10">
                    <p className="text-xl font-bold">Firebase</p>
                    <p className="text-xl font-bold">MongoDB</p>
                    <p className="text-xl font-bold">JWT</p>
                    <p className="text-xl font-bold">AWS</p>
                </div>
            </section>
        </div>
    )
}
export default Skills