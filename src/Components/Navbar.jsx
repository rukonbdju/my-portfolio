import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
const Navbar = () => {
    const { hash } = useLocation()
    console.log(hash)
    useEffect(() => {
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            const yOffset = -80; // Offset for 100px below the top
            const y = element.getBoundingClientRect().top + window.scrollY +yOffset;
            console.log(y)
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }, [hash]);
    return (
        <nav className=" md:sticky lg:sticky md:top-0 lg:top-0 ">
            <div className=" w-4/5 p-2 mt-1 backdrop-blur-md mx-auto flex flex-row items-center justify-between">
                <section>
                    <div>
                        <h1 className="text-2xl text-red-500 font-bold">Portfolio</h1>
                    </div>
                </section>
                <section>
                    <div className="flex flex-row gap-10 items-center justify-center">
                        <Link to={'/#home'} className="text-sm font-bold active:text-red-700 hover:text-red-400">Home</Link>
                        <Link to={'/#services'} className="text-sm font-bold active:text-red-700 hover:text-red-400">Services</Link>
                        <Link to={'/#projects'} className="text-sm font-bold active:text-red-700 hover:text-red-400">Projects</Link>
                        <Link to={'/#blogs'} className="text-sm font-bold active:text-red-700 hover:text-red-400">Blogs</Link>
                        <Link to={'/#skills'} className="text-sm font-bold active:text-red-700 hover:text-red-400">Skills</Link>
                        <Link to={'/#contact'} className="text-sm font-bold active:text-red-700 hover:text-red-400">Contact</Link>
                        <button className="text-md bg-red-500 px-4 py-2 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Download CV</button>
                    </div>
                </section>
            </div>
        </nav>
    )
}
export default Navbar