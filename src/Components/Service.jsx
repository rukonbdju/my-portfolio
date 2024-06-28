import icon from "../assets/frontend.svg"
const Service=({service})=>{
    return(
        <div className="flex flex-row items-center justify-center gap-4 border-2 p-4 border-dashed rounded-xl border-red-500 shadow-md">
            <section className="basis-1/3">
                <div>
                    <img className="w-full" src={icon} alt="" />
                </div>
            </section>
            <section className="basis-2/3">
                <h1 className="text-xl font-bold">{service.title}</h1>
                <p className="text-bold font-md mt-4">{service.summary}</p>
            </section>
        </div>
    )
}
export default Service