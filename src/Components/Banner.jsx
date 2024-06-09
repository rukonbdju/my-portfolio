import banner from "../assets/banner.svg"
import bg from "../assets/bg-points.svg"
const Banner = () => {
    return (
        <div className=" w-screen" style={{
            backgroundImage:`url(${bg})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        }}>
            <div className="grid grid-cols-2 gap-5 items-center justify-evenly h-screen w-4/5 mx-auto">
                <section>
                    <div className="p-5">
                        <img className="w-full" src={banner} alt="" />
                    </div>
                </section>
                <section>
                    <header>
                        <p className="text-2xl text-red-500 font-bold">Hello, I am</p>
                        <h1 className="text-6xl font-bold my-5">Rukonuzzaman Rukon</h1>
                        <h2 className="text-4xl font-bold text-red-500">Full Stack Developer</h2>
                        <p></p>
                        <div className="flex flex-row gap-5">
                            <button className=" mt-5 text-xl bg-red-500 px-5 py-3 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Download CV</button>
                            <button className=" mt-5 text-xl hover:bg-red-500 px-5 py-3 hover:text-slate-50 font-bold rounded-full bg-white text-red-500 border-2 border-red-500 active:scale-90 transition-all">Hire Me</button>
                        </div>
                    </header>
                </section>
            </div>
        </div>
    )
}
export default Banner;