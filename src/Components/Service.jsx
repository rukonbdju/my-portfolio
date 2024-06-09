import icon from "../assets/frontend.svg"
const Service=({service})=>{
    return(
        <div className="grid grid-cols-2 items-center justify-center gap-4 border-2 p-4 border-dashed rounded-xl border-red-500 shadow-md">
            <section>
                <div>
                    <img className="w-full" src={icon} alt="" />
                </div>
            </section>
            <section>
                <h1 className="text-3xl font-bold">{service.title}</h1>
                <p className="text-bold font-xl mt-4">{service.summary}</p>
            </section>
        </div>
    )
}
export default Service