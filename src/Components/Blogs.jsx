import Blog from "./Blog"

const Blogs = () => {
    const blogs = [
        {
            id:1,
            title:"Top 5 Programming Language",
            photoURL:"",
            blogSummary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt culpa consectetur vero repellendus cum animi! Vitae quos eum debitis qui illo molestiae aliquam architecto aut! Natus culpa sunt temporibus.",
            date:"5 dec 2023"
        },
        {
            id:2,
            title:"Top 5 Programming Language",
            photoURL:"",
            blogSummary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt culpa consectetur vero repellendus cum animi! Vitae quos eum debitis qui illo molestiae aliquam architecto aut! Natus culpa sunt temporibus.",
            date:"5 dec 2023"
        },
        {
            id:3,
            title:"Top 5 Programming Language",
            photoURL:"",
            blogSummary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt culpa consectetur vero repellendus cum animi! Vitae quos eum debitis qui illo molestiae aliquam architecto aut! Natus culpa sunt temporibus.",
            date:"5 dec 2023"
        }
    ]
    return (
        <div id='blogs' className="mt-32">
            <section>
                <header className="my-16">
                    <h4 className="text-2xl text-red-500 font-bold text-center">My BLogs</h4>
                    <h1 className="text-4xl my-2 font-bold text-center text-tcolor">Blogs I have written recently</h1>
                </header>
            </section>
            <section className="w-4/5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {
                        blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
            </section>
        </div>
    )
}
export default Blogs