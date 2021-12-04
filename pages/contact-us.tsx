import AppHead from '@components/head'
import AppHeader from '@components/header'
import AppFooter from '@components/footer'
import Head from 'next/head'


export default function ContactUsPage() {

    return (
        <div className="min-h-screen w-full relative">
            <AppHead/>
            <AppHeader/>
            <Head>
                <title>Contact Us - Demo Blog App</title>
            </Head>

            <main className="w-full relative">
                <div className="relative bg-white overflow-hidden">
                    <div className="pt-5 pb-10">
                        <div className="relative max-w-7xl w-full  mx-auto sm:static">
                            <div>
                                <div className="container mx-auto flex flex-wrap w-full flex-1 ">

                                    <form className="w-full max-w-lg" name="contact-us" method="post" data-netlify="true" action="/thank-you">
                                        <input type="hidden" name="form-name" value="contact-us"/>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    First Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                                       type="text" placeholder="Jane" name="firstname"  required/>
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                       id="grid-last-name" type="text" placeholder="Doe" name="lastname"  required/>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    E-mail
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                       id="email" type="email" name="email"  required/>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Message
                                                </label>
                                                <textarea
                                                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                                    id="message" name="message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center">
                                            <div>
                                                <button className="shadow bg-red-500 hover:bg-red-700 w-[10rem] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>


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
