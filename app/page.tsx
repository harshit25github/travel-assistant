"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FlightCard } from "@/components/flight-card"
import { TravelPlaceCard } from "@/components/travel-place-card"
import { HotelCard } from "@/components/hotel-card"
import { RestaurantCard } from "@/components/restaurant-card"
import { Send } from "lucide-react"

type CardType = "flights" | "places" | "hotels" | "restaurants" | null

export default function Home() {
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState("")
  const [displayType, setDisplayType] = useState<CardType>(null)

  const sampleFlights = [
    {
      airline: "United Airlines",
      departure: "New York (JFK)",
      arrival: "Los Angeles (LAX)",
      departureTime: "08:00 AM",
      arrivalTime: "11:00 AM",
      price: "$250",
      date: "2024-10-26",
    },
    {
      airline: "Delta Airlines",
      departure: "Los Angeles (LAX)",
      arrival: "New York (JFK)",
      departureTime: "01:00 PM",
      arrivalTime: "09:00 PM",
      price: "$280",
      date: "2024-10-27",
    },
    {
      airline: "American Airlines",
      departure: "Chicago (ORD)",
      arrival: "Miami (MIA)",
      departureTime: "09:30 AM",
      arrivalTime: "12:30 PM",
      price: "$180",
      date: "2024-11-01",
    },
  ]

  const samplePlaces = [
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      description:
        "An iconic wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Statue of Liberty",
      location: "New York, USA",
      description:
        "A colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, designed by Frédéric Auguste Bartholdi, was built by Gustave Eiffel.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Great Wall of China",
      location: "Huairou, China",
      description:
        "A series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  const sampleHotels = [
    {
      name: "Grand Hyatt New York",
      location: "New York, USA",
      pricePerNight: "$350/night",
      rating: 4.5,
      amenities: ["Wi-Fi", "Gym", "Restaurant"],
      description:
        "A luxurious hotel located in the heart of Midtown Manhattan, offering spacious rooms, fine dining, and easy access to Grand Central Terminal.",
    },
    {
      name: "The Plaza Hotel",
      location: "New York, USA",
      pricePerNight: "$600/night",
      rating: 4.8,
      amenities: ["Wi-Fi", "Spa", "Concierge"],
      description:
        "An iconic luxury hotel overlooking Central Park, known for its opulent decor, world-class service, and historic charm.",
    },
    {
      name: "Hotel Riu Plaza Miami Beach",
      location: "Miami Beach, USA",
      pricePerNight: "$280/night",
      rating: 4.2,
      amenities: ["Wi-Fi", "Pool", "Beach Access"],
      description:
        "A vibrant beachfront hotel offering modern amenities, an outdoor pool, and direct access to the beautiful sands of Miami Beach.",
    },
  ]

  const sampleRestaurants = [
    {
      name: "Per Se",
      location: "New York, USA",
      cuisine: "French",
      priceRange: "$$$$",
      rating: 4.7,
      description:
        "Thomas Keller's New York outpost of his famed French Laundry, offering a refined tasting menu experience with stunning views of Central Park.",
    },
    {
      name: "Joe's Stone Crab",
      location: "Miami Beach, USA",
      cuisine: "Seafood",
      priceRange: "$$$",
      rating: 4.5,
      description:
        "A legendary Miami Beach institution famous for its fresh stone crab claws, served seasonally since 1913.",
    },
    {
      name: "The Spotted Pig",
      location: "New York, USA",
      cuisine: "Gastropub",
      priceRange: "$$",
      rating: 4.3,
      description:
        "A popular gastropub in the West Village known for its delicious burgers, seasonal dishes, and lively atmosphere.",
    },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }])
      setInput("")
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `You said: "${input}". How can I help you with your travel plans?`, sender: "bot" },
        ])
      }, 1000)
    }
  }

  const handleQuickAction = (action: CardType) => {
    setDisplayType(action)
    if (action) {
      setMessages((prev) => [...prev, { text: `Showing ${action}...`, sender: "bot" }])
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b bg-card">
        <h1 className="text-xl font-bold">Travel Chatbot</h1>
        {/* Add theme toggle or user menu here if needed */}
      </header>
      <main className="flex-1 overflow-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayType === "flights" && sampleFlights.map((flight, index) => <FlightCard key={index} {...flight} />)}

        {displayType === "places" && samplePlaces.map((place, index) => <TravelPlaceCard key={index} {...place} />)}

        {displayType === "hotels" && sampleHotels.map((hotel, index) => <HotelCard key={index} {...hotel} />)}

        {displayType === "restaurants" &&
          sampleRestaurants.map((restaurant, index) => <RestaurantCard key={index} {...restaurant} />)}

        {!displayType && (
          <div className="col-span-full flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            <p className="text-lg mb-4">Start by asking me about flights, hotels, or places!</p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => handleQuickAction("flights")}>Show Flights</Button>
              <Button onClick={() => handleQuickAction("places")}>Show Places</Button>
              <Button onClick={() => handleQuickAction("hotels")}>Show Hotels</Button>
              <Button onClick={() => handleQuickAction("restaurants")}>Show Restaurants</Button>
            </div>
          </div>
        )}
      </main>
      <div className="p-4 border-t bg-card">
        <div className="flex flex-col gap-2 mb-4 max-h-60 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-primary text-primary-foreground self-end"
                  : "bg-muted text-muted-foreground self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="w-5 h-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
