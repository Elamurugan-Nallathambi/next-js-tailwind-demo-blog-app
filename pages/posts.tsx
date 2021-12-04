import AppHead from '@components/head'
import AppHeader from '@components/header'
import AppFooter from '@components/footer'
import {PostModel} from '@components/model/post'
import {InferGetServerSidePropsType} from "next";

export default function PostsPage({posts}: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <div className="min-h-screen w-full relative">
            <AppHead/>
            <AppHeader/>

            <main className="w-full relative">
                <div className="relative bg-white overflow-hidden">
                    <div className="pt-4 pb-80 sm:pt-10 sm:pb-40 lg:pt-10 lg:pb-48">
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                            <div>
                                <h3 className="text-2xl font font-extrabold tracking-tight text-gray-900">
                                    Blog Posts
                                </h3>

                                <div className="mt-2 w-full pl-5 ">
                                    <ul className="list-disc" >
                                        {posts.map((post) => (
                                            <li className="px-2 py-2" key={post.id}>
                                                <a className="capitalize" href={`/posts/${post.id}`}>
                                                    {post.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                <section className="w-full md:w-3/3 flex flex-col items-center px-3">

                                    <article className="flex flex-col shadow my-4">
                                        <a href="#" className="hover:opacity-75">
                                            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"  className='w-full' />
                                        </a>
                                        <div className="bg-white flex flex-col justify-start p-6">
                                            <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                                            <p className="text-sm pb-3">
                                                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                                            </p>
                                            <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit
                                                amet posuere magna..</a>
                                            <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </article>



                                    <div className="flex items-center py-8">
                                        <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                                        <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                                        <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
                                    </div>

                                </section>

                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <AppFooter/>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostModel[] = await response.json();
    return {
        props: {
            posts
        }
    }
}
