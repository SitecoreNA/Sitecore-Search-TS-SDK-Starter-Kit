"use client"

export default function EnergyTips() {
  return (
    <section className="text-center p-12 ">
        <h2 className="text-3xl font-bold text-foreground mb-6">Tips for Energy Conservation</h2>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="leading-none font-semibold">Tips for Energy Conservation</div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-start space-x-3 p-3 border rounded-lg border-gray-200">
                        <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-snowflake h-12 w-12 mx-auto text-blue-600 mb-4" aria-hidden="true"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Adjust Your Thermostat</h4>
                            <p className="text-sm mt-1">Set to 78°F or higher during peak hours (2-8 PM)</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded-lg border-gray-200">
                        <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-12 w-12 mx-auto text-blue-600 mb-4" aria-hidden="true"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Shift Usage Times</h4>
                            <p className="text-sm mt-1">Run appliances before 2 PM or after 8 PM when possible</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded-lg border-gray-200">
                        <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb h-12 w-12 mx-auto text-blue-600 mb-4" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Use LED Lighting</h4>
                            <p className="text-sm mt-1">Switch to energy-efficient LED bulbs to reduce heat and consumption</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded-lg border-gray-200">
                        <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-12 w-12 mx-auto text-blue-600 mb-4" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Close Blinds & Curtains</h4>
                            <p className="text-sm mt-1">Block direct sunlight to keep your home cooler naturally</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}