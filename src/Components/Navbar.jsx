import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
        <div className=" w-4/5 p-2 mt-2 backdrop-blur-md mx-auto flex flex-row items-center justify-between rounded-full border-2">
            <section>
                <div>
                    <h1 className="text-2xl text-red-500 font-bold">Portfolio</h1>
                </div>
            </section>
            <section>
                <div className="flex flex-row gap-10 items-center justify-center">
                    <Link className="text-lg font-bold active:text-red-700 hover:text-red-400">Home</Link>
                    <Link className="text-lg font-bold active:text-red-700 hover:text-red-400">Services</Link>
                    <Link className="text-lg font-bold active:text-red-700 hover:text-red-400">Projects</Link>
                    <Link className="text-lg font-bold active:text-red-700 hover:text-red-400">Blogs</Link>
                    <Link className="text-lg font-bold active:text-red-700 hover:text-red-400">About</Link>
                    <button className="text-xl bg-red-500 px-5 py-3 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Download CV</button>
                </div>
            </section>
        </div>
    )
}
export default Navbar