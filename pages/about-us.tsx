import AppHead from '@components/head'
import AppHeader from '@components/header'
import AppFooter from '@components/footer'

export default function AboutUs() {
    return (
        <div className="min-h-screen py-2">
            <AppHead/>
            <AppHeader/>

            <main className="w-full relative">
                <div className="relative bg-white overflow-hidden">
                    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                            <div className="sm:max-w-lg">
                                <h3 className="text-2xl font font-extrabold tracking-tight text-gray-900">
                                    About Us
                                </h3>
                                <p className="mt-4 text-xl text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter/>
        </div>
    )
}
