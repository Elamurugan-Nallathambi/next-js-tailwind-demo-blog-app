import AppHead from '@components/head'
import AppHeader from '@components/header'
import AppFooter from '@components/footer'
import Post from '@components/post'
import {PostModel} from '@components/model/post'
import {InferGetServerSidePropsType, GetServerSidePropsContext} from "next";


export default function PostView({post}: InferGetServerSidePropsType<typeof getStaticProps>) {

    return (
        <div className="min-h-screen w-full relative">
            <AppHead/>
            <AppHeader/>

            <main className="w-full relative">
                <div className="relative bg-white overflow-hidden">
                    <div className="pt-5 pb-10">
                        <div className="relative max-w-7xl mx-auto sm:static">
                            <div>
                                <div className="container mx-auto flex flex-wrap">

                                    <section className="w-full md:w-3/3 flex flex-col items-center px-0">

                                        <article className="flex flex-col shadow ">
                                            <a href="#" className="hover:opacity-75">
                                                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" className='w-full '/>
                                            </a>
                                            <div className="bg-white flex flex-col justify-start p-6">
                                                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                                                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4 capitalize">{post.title}</a>
                                                <p className="text-sm pb-8">
                                                    By <a href="#" className="font-semibold hover:text-gray-800">XYZ XYZ</a>, Published on April 25th, 2020
                                                </p>
                                                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                                    <p className="font-bold capitalize">{post.title}</p>
                                                    <p className="capitalize">{post.body}</p>
                                                </div>
                                                <h1 className="text-2xl font-bold pb-3">Introduction</h1>
                                                <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices.
                                                    Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                                                    ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem.
                                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel
                                                    hendrerit molestie, mollis vel elit.</p>
                                                <h1 className="text-2xl font-bold pb-3">Heading</h1>
                                                <p className="pb-3">Vivamus nec facilisis elit, quis congue justo. In non augue ex. Aenean pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam faucibus a diam sed vehicula. Nullam
                                                    commodo lacus tincidunt, tincidunt orci sed, dapibus leo. Vivamus vulputate quis risus a ultricies. Aliquam luctus id tellus non condimentum. Aenean maximus viverra ipsum eget vestibulum.
                                                    Morbi ut tincidunt sem, efficitur volutpat tortor. Donec scelerisque, ipsum eu efficitur semper, neque turpis sodales quam, in aliquam elit lacus varius lorem. Ut ut diam id leo efficitur
                                                    malesuada eget in velit. Pellentesque tristique orci nunc, vitae fermentum nibh luctus eu. Mauris condimentum justo sed ipsum egestas varius.</p>
                                                <p className="pb-3">Sed sagittis odio a volutpat feugiat. Cras aliquam varius justo, a rhoncus ante bibendum id. Nulla maximus nisl sed enim maximus, ut dictum lectus hendrerit. Fusce
                                                    venenatis tincidunt eros. Phasellus quis augue vulputate ipsum pellentesque fringilla. Morbi nec tempor felis. Maecenas sollicitudin pellentesque dui, sit amet scelerisque mauris elementum
                                                    nec. Cras ante metus, mattis in malesuada in, fermentum a nunc. Suspendisse potenti. Sed tempor lacus sed commodo dignissim. Quisque dictum, dolor auctor iaculis cursus, ipsum urna
                                                    porttitor ex, sed consequat nisi tellus eget ante. Duis molestie mollis eros, eu sollicitudin mauris lobortis quis.</p>
                                                <p className="pb-3">Vivamus sed neque nec massa scelerisque imperdiet eget id sapien. Fusce elementum mi id malesuada luctus. Proin quis lorem id leo porta interdum non ac nisl. Integer nulla
                                                    sem, ultrices sed neque eget, blandit condimentum metus. Aliquam eget malesuada sapien. Curabitur aliquet orci sit amet ex tincidunt convallis. Mauris urna mi, consequat mattis mollis a,
                                                    dignissim eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam facilisis sem diam, viverra consequat metus consequat vel. Cras a mi eu ex
                                                    luctus malesuada quis eu ante. Aliquam erat volutpat.</p>
                                                <h1 className="text-2xl font-bold pb-3">Conclusion</h1>
                                                <p className="pb-3">Donec vulputate auctor leo lobortis congue. Sed elementum pharetra turpis. Nulla at condimentum odio. Vestibulum ullamcorper enim eget porttitor bibendum. Proin eros nibh,
                                                    maximus vitae nisi a, blandit ultricies lectus. Vivamus eu maximus lacus. Maecenas imperdiet iaculis neque, vitae efficitur felis vestibulum sagittis. Nunc a eros aliquet, egestas tortor
                                                    hendrerit, posuere diam. Proin laoreet, ligula non eleifend bibendum, orci nulla luctus ipsum, dignissim convallis quam dolor et nulla.</p>
                                            </div>
                                        </article>

                                        <div className="w-full flex pt-6">
                                            <a href="/posts/44" className="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                                                <p className="text-lg text-blue-800 font-bold flex items-center"><i className="fas fa-arrow-left pr-1"></i> Previous</p>
                                                <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                                            </a>
                                            <a href="/posts/98" className="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                                                <p className="text-lg text-blue-800 font-bold flex items-center justify-end">Next <i className="fas fa-arrow-right pl-1"></i></p>
                                                <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                                            </a>
                                        </div>

                                        <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
                                            <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                                                <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" className="rounded-full shadow h-32 w-32"/>
                                            </div>
                                            <div className="flex-1 flex flex-col justify-center md:justify-start">
                                                <p className="font-semibold text-2xl">XYZ</p>
                                                <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna.</p>
                                            </div>
                                        </div>

                                    </section>

                                    <div className="w-full md:w-1/3 flex flex-col items-center px-3 hidden">

                                        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                                            <p className="text-xl font-semibold pb-5">About Us</p>
                                            <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                                            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                                                Get to know us
                                            </a>
                                        </div>

                                        <div className="w-full bg-white shadow flex flex-col my-4 p-6">

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <AppFooter/>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map((post: PostModel) => ({
        params: {id: post.id.toString()},
    }))

    return {paths, fallback: false}
}

// export const getStaticProps = async (params: any) => {
export const getStaticProps = async (context: GetServerSidePropsContext) => {
    const {params} = context;

    let post: PostModel;

    if (!params?.id) {
        post = {
            'userId': 0,
            'id': 0,
            'title': 'Not Found',
            'body': ''
        }
    } else {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        post = await response.json();
    }
    return {
        props: {
            post
        }
    }
}
