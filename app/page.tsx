import { Chat } from "@/components/chat"
import { ThemeToggle } from "@/components/theme-toggle"
import { FlightCard } from "@/components/flight-card"
import { TravelPlaceCard } from "@/components/travel-place-card"

export default function Home() {
  const sampleFlights = [
    {
      airline: "United Airlines",
      flightNumber: "UA123",
      departure: "New York (JFK)",
      arrival: "Los Angeles (LAX)",
      departureTime: "08:00 AM",
      arrivalTime: "11:00 AM",
      price: "$250",
      date: "2024-08-15",
    },
    {
      airline: "Delta Airlines",
      flightNumber: "DL456",
      departure: "Los Angeles (LAX)",
      arrival: "New York (JFK)",
      departureTime: "01:00 PM",
      arrivalTime: "09:00 PM",
      price: "$300",
      date: "2024-08-15",
    },
    {
      airline: "American Airlines",
      flightNumber: "AA789",
      departure: "Chicago (ORD)",
      arrival: "Miami (MIA)",
      departureTime: "10:00 AM",
      arrivalTime: "01:00 PM",
      price: "$200",
      date: "2024-08-16",
    },
    {
      airline: "Southwest Airlines",
      flightNumber: "WN101",
      departure: "Houston (HOU)",
      arrival: "Denver (DEN)",
      departureTime: "09:30 AM",
      arrivalTime: "11:30 AM",
      price: "$180",
      date: "2024-08-16",
    },
  ]

  const samplePlaces = [
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      description: "An iconic wrought-iron lattice tower on the Champ de Mars in Paris, France.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Statue of Liberty",
      location: "New York, USA",
      description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Colosseum",
      location: "Rome, Italy",
      description: "An oval amphitheatre in the centre of the city of Rome, Italy.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <img src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
          </a>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ThemeToggle />
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Chat />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left gap-4">
        {sampleFlights.map((flight, index) => (
          <FlightCard key={index} {...flight} />
        ))}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left gap-4">
        {samplePlaces.map((place, index) => (
          <TravelPlaceCard key={index} {...place} />
        ))}
      </div>
    </main>
  )
}
