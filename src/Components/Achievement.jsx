import ph from "../assets/ph.png"
import fcc from "../assets/fcc.png"
const Achievement =()=>{
    return(
        <div className="mt-32">
            <header className="my-16">
                <h1 className="text-red-500 text-2xl font-bold text-center">Certificates</h1>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-4/5 mx-auto">
                <div className="p-2 border-2 border-red-300 rounded-md">
                    <img className="w-full" src={ph} alt="" />
                </div>
                <div className="p-2 border-2 border-red-300 rounded-md flex items-center">
                    <img className="w-full" src={fcc} alt="" />
                </div>
                
            </section>
        </div>
    )
}

export default Achievement