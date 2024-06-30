import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { CrossIcon, MenuIcon } from "./Icons/Icons";
const Navbar = () => {
    const { hash } = useLocation()
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system")

    const handleThemeChange = (e) => {
        setTheme(e.target.value)
        if (e.target.value === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add(e.target.value)
            localStorage.setItem("theme", e.target.value)
        }
        else if (e.target.value === "dark") {
            document.body.classList.remove("light")
            document.body.classList.add(e.target.value)
            localStorage.setItem("theme", e.target.value)
        }
        else {
            console.log(e.target.value)
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            if (prefersDarkScheme.matches) {
                localStorage.setItem("theme", "dark")
                document.body.classList.remove("light")
                document.body.classList.add("dark")
            }
            else {
                localStorage.setItem("theme", "light")
                document.body.classList.remove("dark")
                document.body.classList.add("light")
            }
        }

    }

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                const yOffset = -80; // Offset for 100px below the top
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <nav className=" md:sticky lg:sticky md:top-0 lg:top-0 z-40 bg-white/10">
            <div className=" w-11/12 py-4 backdrop-blur-md mx-auto flex flex-row items-center content-center justify-between">
                <section>
                    <div>
                        <h1 className="text-2xl text-red-500 font-bold">Portfolio</h1>
                    </div>
                </section>
                <section>
                    <div className="flex flex-row md:hidden lg:hidden items-center">
                        <span className="inline-block p-1 rounded-md bg-red-400">
                            <MenuIcon></MenuIcon>
                        </span>
                        <span className="inline-block p-1 rounded-md bg-red-400">
                            <CrossIcon></CrossIcon>
                        </span>
                    </div>
                    <div className="hidden md:flex lg:flex flex-row gap-5 items-center justify-center">
                        <Link to={'/#home'} className="text-sm text-tcolor active:text-red-700 hover:text-red-400">Home</Link>
                        <Link to={'/#services'} className="text-sm text-tcolor active:text-red-700 hover:text-red-400">Services</Link>
                        <Link to={'/#projects'} className="text-sm text-tcolor active:text-red-700 hover:text-red-400">Projects</Link>
                        <Link to={'/#skills'} className="text-sm text-tcolor active:text-red-700 hover:text-red-400">Skills</Link>
                        <Link to={'/#contact'} className="text-sm text-tcolor active:text-red-700 hover:text-red-400">Contact</Link>
                        <div>
                            <select onChange={handleThemeChange} value={theme} className="outline-none border bg-background text-tcolor">
                                <option className="bg-background" value="dark">Dark</option>
                                <option className="bg-none" value="light">Light</option>
                                <option className="bg-none" value="system">System</option>
                            </select>
                        </div>
                        <a target="_blank" href="https://drive.google.com/file/d/1zP_y1qH8rxR2iXzQ7x5R7n-dCCeAbVqN/view">
                            <button className="text-sm bg-red-500 px-3 py-1 text-slate-50 rounded-full hover:bg-white hover:text-red-500 border-1 border-red-500 active:scale-90 transition-all">Download CV</button></a>

                    </div>
                </section>
            </div>
        </nav>
    )
}
export default Navbar