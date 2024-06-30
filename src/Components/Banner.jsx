import banner from "../assets/banner.svg"
import bg from "../assets/bg-points.svg"
import { FacebookIcon, GutHubIcon, LinkedinIcon, WhatsappIcon } from "./Icons/Icons";
const Banner = () => {
    return (
        <div id="home" style={{
            //backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="flex flex-col md:grid lg:grid md:grid-col-2 lg:grid-cols-2 gap-5 items-center justify-evenly w-4/5 mx-auto">
                <section>
                    <div className="p-5 w-full">
                        <img className="w-full" src={banner} alt="" />
                    </div>
                </section>
                <section>
                    <header>
                        <p className="text-xl text-red-500 font-bold">Hello, I am</p>
                        <h1 className="text-3xl font-bold my-5 text-tcolor">Rukonuzzaman Rukon</h1>
                        <h2 className="text-2xl font-bold text-red-500">Full Stack Developer</h2>
                    </header>
                    <div className="flex flex-row gap-5">
                        <a target="_blank" href="https://drive.google.com/file/d/1zP_y1qH8rxR2iXzQ7x5R7n-dCCeAbVqN/view">
                            <button className=" mt-5 text-md bg-red-500 px-4 py-2 text-slate-50 font-bold rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 active:scale-90 transition-all">Download CV</button></a>

                        <button className=" mt-5 text-md hover:bg-red-500 px-4 py-2 hover:text-slate-50 font-bold rounded-full bg-white text-red-500 border-2 border-red-500 active:scale-90 transition-all">Hire Me</button>
                    </div>
                    <div className="flex flex-row gap-4 mt-10">
                        <LinkedinIcon></LinkedinIcon>
                        <GutHubIcon></GutHubIcon>
                        <WhatsappIcon></WhatsappIcon>
                        <FacebookIcon></FacebookIcon>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Banner;