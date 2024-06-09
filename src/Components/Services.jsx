import Service from "./Service";

const Services=()=>{
    const services=[
        {
            id:1,
            title:"Frontend Development",
            summary:"I provide service to develop frontend of your website using popular frontend technologies in very efficient way."
        },
        {
            id:2,
            title:"Fullstack Web Application",
            summary:"I can build complex, scalable and robust Fullstack Web Application with high performance."
        },
        {
            id:3,
            title:"Software as a Service",
            summary:"I provide any Software as a Service solution in web technology"
        },
    ]
    return(
        <div className="mt-32">
            <section>
                <header className="my-16">
                    <h3 className="text-2xl text-red-500 font-bold text-center">Services</h3>
                    <h1 className="text-4xl my-2 font-bold text-center">Provide Wide Range of Services</h1>
                </header>
            </section>
            <section className="grid grid-cols-3 gap-5 w-4/5 mx-auto">
                {services.map(item=><Service key={item.id} service={item}></Service>)}
            </section>
        </div>
    )
}
export default Services;