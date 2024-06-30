const Contact = () => {
    return (
        <div id='contact' className="mt-32">
            <section>
                <header className="my-12">
                    <h4 className="text-2xl text-red-500 text-center">Contact Info</h4>
                    <h1 className="text-4xl my-2 font-bold text-center text-tcolor ">Contact Any Time</h1>
                </header>
            </section>
            <section className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="text-tcolor  bg-red-50/10 p-5 rounded-md h-full flex flex-col items-center justify-center">
                        <div>
                            <p>Email: rukonbd.dev@gmail.com</p>
                        </div>
                        <div>
                            <p>Whatsapp: 01902445096</p>
                        </div>
                        <div>
                            <p>Location: Jahangirnagar University, Savar, Dhaka, Bangladesh.</p>
                        </div>
                </div>
                <div className=" bg-red-50/10 p-5 rounded-md">
                    <form className="flex flex-col gap-4 p-2 items-center">
                        <div>
                            <label className="block text-tcolor ">Name</label>
                            <input className="p-2  outline-none bg-background border border-tcolor rounded-md text-tcolor min-w-80 focus:border-red-400" placeholder="Enter name" type="text" />
                        </div>
                        <div>
                            <label className="block text-tcolor ">Email</label>
                            <input className="p-2  outline-none bg-background border border-tcolor rounded-md text-tcolor min-w-80 focus:border-red-400" placeholder="Enter email" type="text" />
                        </div>
                        <div>
                            <label className="block text-tcolor ">Message</label>
                            <textarea className="p-2  outline-none bg-background border border-tcolor rounded-md text-tcolor min-w-80 focus:border-red-400" placeholder="Message" type="text" />
                        </div>
                        <div>
                            <input className="p-2 outline-none bg-background border border-tcolor rounded-md text-tcolor min-w-80 hover:bg-red-400" type="button" value="SUBMIT" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact