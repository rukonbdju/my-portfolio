const Blog=({blog})=>{
    return(
        <div className="flex flex-col gap-4 p-4 shadow-lg bg-red-200/10 rounded-md">
            <section>
                <div>
                    <img src={blog.photoURL} alt="blog photo" />
                </div>
            </section>
            <section>
                <h1 className="text-xl font-bold text-tcolor my-2">{blog.title}</h1>
                <p className="text-sm text-tcolor">{blog.blogSummary} <span className="underline cursor-pointer hover:text-red-400">Read more</span></p>
            </section>
        </div>
    )
}

export default Blog