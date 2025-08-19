import Image from "next/image";

export default function PopularDestinations() {
  return (
<section className="py-16 bg-gray-50 ">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Explore our most loved destinations around the world</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-gray-300 bg-card text-card-foreground overflow-hidden hover:shadow-lg transition-shadow cursor-pointer shadow-md">
                <div className="relative">
                    <Image alt="Paris" width="400" height="300" loading="lazy" className="w-full h-48 object-cover" src="/paris.jpg?" />
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 absolute top-4 right-4 bg-blue-600 text-white">From $599
                </div>
            </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">Paris</h3>
                </div>
            </div>
            <div className="rounded-xl border border-gray-300 bg-card text-card-foreground overflow-hidden hover:shadow-lg transition-shadow cursor-pointer shadow-md">
                <div className="relative">
                    <Image alt="Tokyo" width="400" height="300" loading="lazy" className="w-full h-48 object-cover" src="/tokyo.jpg" />
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 absolute top-4 right-4 bg-blue-600 text-white">From $899
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">Tokyo</h3>
                </div>
            </div>
            <div className="rounded-xl border border-gray-300 bg-card text-card-foreground overflow-hidden hover:shadow-lg transition-shadow cursor-pointer shadow-md">
                <div className="relative">
                    <Image alt="New York" width="400" height="300" loading="lazy" className="w-full h-48 object-cover" src="/newyork.jpg" />
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 absolute top-4 right-4 bg-blue-600 text-white">From $499</div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">New York</h3>
                </div>
            </div>
            <div className="rounded-xl border border-gray-300 bg-card text-card-foreground overflow-hidden hover:shadow-lg transition-shadow cursor-pointer shadow-md">
                <div className="relative">
                    <Image alt="London" width="400" height="300" loading="lazy" className="w-full h-48 object-cover" src="/london.jpg" />
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 absolute top-4 right-4 bg-blue-600 text-white">From $529</div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">London</h3>
                </div>
            </div>
        </div>
    </div>
</section>
  )}