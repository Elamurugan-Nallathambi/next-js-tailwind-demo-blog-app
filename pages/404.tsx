import AppHead from '@components/head'
import AppHeader from '@components/header'
import AppFooter from '@components/footer'

export default function App404Page() {
    return (
        <div className="min-h-screen py-2">
            <AppHead/>
            <AppHeader/>

            <main className="w-full relative">
                <div className="relative bg-white overflow-hidden">
                    <div className="pb-0">
                        <div className="relative max-w-7xl mx-auto">
                            <div className="w-12/12 m-auto p-20 flex items-center justify-center">
                                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                    <div className="border-t border-gray-200 text-center p-8">
                                        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
                                        <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                                        <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                                        <a href="/" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                            HOME
                                        </a>
                                        <a href="/contact-us"  className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                                            Contact Us
                                        </a>
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
