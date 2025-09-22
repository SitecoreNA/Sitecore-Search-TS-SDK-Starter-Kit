import Image from "next/image"

export default function LiveGridConditions() {
  return (
    <section className="mx-auto p-6 w-full ">
      <h2 className="text-3xl font-bold text-foreground mb-6">Live Grid Conditions</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
            <div data-slot="card-header" className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <div data-slot="card-title" className="text-sm font-medium">Current Load</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-red-500" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
            </div>
            <div data-slot="card-content" className="px-6">
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">68,245</div>
                <div className="text-sm">MW</div>
              </div>
              <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mt-2 text-yellow-600 bg-yellow-50 border-yellow-200">WARNING</span>
            </div>
          </div>
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
            <div data-slot="card-header" className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <div data-slot="card-title" className="text-sm font-medium">Available Capacity</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-4 w-4 text-blue-500" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
            </div>
            <div data-slot="card-content" className="px-6">
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">82,150</div>
                <div className="text-sm">MW</div>
              </div>
              <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mt-2 text-green-600 bg-green-50 border-green-200">NORMAL</span>
            </div>
          </div>
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
            <div data-slot="card-header" className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <div data-slot="card-title" className="text-sm font-medium">Reserve Margin</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down h-4 w-4 text-green-500" aria-hidden="true"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
            </div>
            <div data-slot="card-content" className="px-6">
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">16.9</div>
                <div className="text-sm">%</div>
              </div>
              <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mt-2 text-green-600 bg-green-50 border-green-200">NORMAL</span>
            </div>
          </div>
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
            <div data-slot="card-header" className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <div data-slot="card-title" className="text-sm font-medium">Frequency</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-4 w-4 text-blue-500" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
            </div>
            <div data-slot="card-content" className="px-6">
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">60.02</div>
                <div className="text-sm">Hz</div>
              </div>
              <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mt-2 text-green-600 bg-green-50 border-green-200">NORMAL</span>
            </div>
          </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
          <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div data-slot="card-title" className="leading-none font-semibold flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-5 w-5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              <span>Current Grid Load</span>
            </div>
          </div>
          <div data-slot="card-content" className="px-6">
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Load: 68,245 MW</span>
                <span>Capacity: 82,150 MW</span>
              </div>
              <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-blue-200 relative w-full overflow-hidden rounded-full h-3">
                <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-blue-400 h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-17%)' }}></div>
              </div>
              <p className="text-sm">Operating at 83% capacity. Reserve margin: 16.9%</p>
            </div>
          </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
          <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div data-slot="card-title" className="leading-none font-semibold flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thermometer h-5 w-5" aria-hidden="true"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
              <span>Temperature Impact</span>
            </div>
          </div>
          <div data-slot="card-content" className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">108°F</div>
                <div className="text-sm">Current Temp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">112°F</div>
                <div className="text-sm">Forecast High</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">+15%</div>
                <div className="text-sm">Load Increase</div>
              </div>
            </div>
          </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-gray-200">
          <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div data-slot="card-title" className="leading-none font-semibold">Current Outages</div>
          </div>
          <div data-slot="card-content" className="px-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg border-gray-200">
                <div>
                  <div className="font-medium">Houston Metro</div>
                  <div className="text-sm text-muted-foreground">12,500 customers affected</div>
                </div>
                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60">active</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg border-gray-200">
                <div>
                  <div className="font-medium">Dallas-Fort Worth</div>
                  <div className="text-sm text-muted-foreground">8,200 customers affected</div>
                </div>
                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60">active</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg border-gray-200">
                <div>
                  <div className="font-medium">Austin Area</div>
                  <div className="text-sm text-muted-foreground">3,400 customers affected</div>
                </div>
                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-gray-200 text-secondary-foreground [a&]:hover:bg-secondary/90">restored</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg border-gray-200">
                <div>
                  <div className="font-medium">San Antonio</div>
                  <div className="text-sm text-muted-foreground">1,800 customers affected</div>
                </div>
                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60">active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}