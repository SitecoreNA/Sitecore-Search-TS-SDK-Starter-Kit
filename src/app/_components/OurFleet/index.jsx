import Image from "next/image"

export default function FleetSection() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Fleet &amp; Experience</h2>
                <p className="text-xl text-gray-600">Modern aircraft and luxurious cabins designed for your comfort</p>
            </div>

            {/* Fleet Stats Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="relative">
                    <Image alt="Our Fleet &amp; Experience" width="600" height="400" loading="lazy" className="w-full h-80 object-cover rounded-lg shadow-lg" src="/aircraft-exterior.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Modern Fleet</h3>
                        <p className="text-lg">State-of-the-art Boeing 787 Dreamliners</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                            <div className="text-gray-700">Aircraft in Fleet</div>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <div className="text-3xl font-bold text-blue-600 mb-2">2.5</div>
                            <div className="text-gray-700">Years Average Age</div>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                            <div className="text-gray-700">On-Time Performance</div>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-700">Daily Flights</div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Class Experience Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* First Class */}
                <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                        <Image height="250" alt="&lt;p&gt;Premium comfort with lie-flat seats, priority service, and exclusive lounges" width="400" loading="lazy" className="w-full h-48 object-cover" src="/frugal-flyer-gqzNVd4Ep18-unsplash.jpg" />
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 absolute top-4 left-4 bg-yellow-600">First Class
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">First Class</h3>
                        <div className="text-gray-600 mb-4">
                            <div>
                                <p>Premium comfort with lie-flat seats, priority service, and exclusive lounges</p>
                                <ul>
                                    <li>Lie-flat seats with direct aisle access</li>
                                    <li>Premium dining options</li>
                                    <li>Priority boarding & baggage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Class */}
                <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                        <Image height="250" alt="&lt;p&gt;Premium comfort with lie-flat seats, priority service, and exclusive lounges" width="400" loading="lazy" className="w-full h-48 object-cover" src="https://united.sitecoresandbox.cloud/api/public/content/8ea90039d25a48cfb42972e99f0acf26?v=c40054b8" />
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 absolute top-4 left-4 bg-blue-600">Business Class
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Class</h3>
                        <div className="text-gray-600 mb-4">
                            <div>
                                <p>Ultimate luxury with private suites, gourmet dining, and personalized service</p>
                                <ul>
                                    <li>Private suite with lie-flat bed</li>
                                    <li>Chef-curated meals</li>
                                    <li>Premium entertainment system</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Economy Class */}
                <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                        <Image height="250" alt="&lt;p&gt;Premium comfort with lie-flat seats, priority service, and exclusive lounges" width="400" loading="lazy" className="w-full h-48 object-cover" src="/jc-gellidon-1g3qVp7ynX4-unsplash.jpg" />
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 absolute top-4 left-4 bg-green-600">Economy Class
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Economy Class</h3>
                        <div className="text-gray-600 mb-4">
                            <div>
                                <p className="mb-2">Comfortable travel with modern amenities, entertainment, and quality service</p>
                                <ul>
                                    <li>Ergonomic seats with extra legroom</li>
                                    <li>Complimentary WiFi</li>
                                    <li>Personal entertainment screen</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
