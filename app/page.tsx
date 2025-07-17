"use client"

import { useChat } from "ai/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TravelPlaceCard } from "@/components/travel-place-card"
import { FlightCard } from "@/components/flight-card"
import { Send, MapPin, Plane } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Sample data for demonstration
const samplePlaces = [
  {
    name: "Santorini",
    location: "Greece",
    description:
      "A stunning Greek island known for its white-washed buildings, blue domes, and breathtaking sunsets over the Aegean Sea.",
    bestTimeToVisit: "April to October",
    attractions: ["Oia Village", "Red Beach", "Ancient Thira", "Wine Tours"],
    estimatedBudget: "$150-300/day",
    rating: 4.8,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    name: "Kyoto",
    location: "Japan",
    description:
      "Ancient capital of Japan featuring thousands of temples, traditional wooden houses, and beautiful gardens.",
    bestTimeToVisit: "March to May, September to November",
    attractions: ["Fushimi Inari Shrine", "Bamboo Grove", "Kiyomizu Temple", "Gion District"],
    estimatedBudget: "$100-200/day",
    rating: 4.9,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
]

const sampleFlights = [
  {
    flightNumber: "AA1234",
    airline: "American Airlines",
    departure: {
      airport: "JFK",
      time: "14:30",
      date: "Dec 15, 2024",
    },
    arrival: {
      airport: "LAX",
      time: "17:45",
      date: "Dec 15, 2024",
    },
    duration: "6h 15m",
    price: "$299",
    aircraftType: "Boeing 737-800",
    status: "On Time" as const,
  },
  {
    flightNumber: "DL5678",
    airline: "Delta Airlines",
    departure: {
      airport: "ATL",
      time: "09:15",
      date: "Dec 16, 2024",
    },
    arrival: {
      airport: "CDG",
      time: "23:30",
      date: "Dec 16, 2024",
    },
    duration: "8h 15m",
    price: "$756",
    aircraftType: "Airbus A350-900",
    status: "On Time" as const,
  },
]

export default function TravelChatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [showPlaces, setShowPlaces] = useState(false)
  const [showFlights, setShowFlights] = useState(false)

  const handleQuickAction = (action: string) => {
    if (action === "places") {
      setShowPlaces(true)
      setShowFlights(false)
    } else if (action === "flights") {
      setShowFlights(true)
      setShowPlaces(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[80vh] flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="w-6 h-6" />
                  Travel Assistant Chatbot
                </CardTitle>
                <p className="text-primary-foreground/80">Your AI-powered travel companion</p>
              </div>
              <ThemeToggle />
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Quick Action Buttons */}
            <div className="flex gap-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickAction("places")}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Show Places
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickAction("flights")}
                className="flex items-center gap-2"
              >
                <Plane className="w-4 h-4" />
                Show Flights
              </Button>
            </div>

            {/* Sample Cards Display */}
            {showPlaces && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {samplePlaces.map((place, index) => (
                  <TravelPlaceCard key={index} {...place} />
                ))}
              </div>
            )}

            {showFlights && (
              <div className="space-y-4 mb-6">
                {sampleFlights.map((flight, index) => (
                  <FlightCard key={index} {...flight} />
                ))}
              </div>
            )}

            {/* Welcome message section - update colors */}
            {messages.length === 0 && !showPlaces && !showFlights && (
              <div className="text-center text-muted-foreground py-8">
                <Plane className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-lg mb-2">Welcome to your Travel Assistant!</p>
                <p className="text-sm">Ask me about travel destinations, flights, or use the quick actions above.</p>
              </div>
            )}

            {/* Chat messages - update colors */}
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}

            {/* Loading indicator - update colors */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="border-t bg-muted/30">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about travel destinations, flights, or travel tips..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
