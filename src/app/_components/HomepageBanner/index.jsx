"use client"

import Image from "next/image";

export default function HomepageBanner() {
  return (
    <section className="text-center py-12">
      <div className="absolute m-auto w-full mt-[100px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-[#3dbed1]">
          Texas Grid Operations Simplified
        </h1>
        <p className="text-xl text-[#ffffff] mb-8 max-w-2xl mx-auto text-pretty font-bold">
          Real-time grid monitoring, intelligent forecasting, and proactive energy management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#3dbed1] text-[#ffffff] hover:bg-[#3dbed1]/90 h-10 rounded-md px-6 has-[>svg]:px-4">View Grid Status</a>
          <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4">Learn More</a>
        </div>
      </div>
      <Image src="/aerial-thumb-large.jpg" className="object-cover w-full" width="400" height="300" />

    </section>
  )
}