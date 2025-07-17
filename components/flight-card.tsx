import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Clock, DollarSign, Calendar } from "lucide-react"

interface FlightCardProps {
  flightNumber: string
  airline: string
  departure: {
    airport: string
    time: string
    date: string
  }
  arrival: {
    airport: string
    time: string
    date: string
  }
  duration: string
  price: string
  aircraftType: string
  status: "On Time" | "Delayed" | "Cancelled"
}

export function FlightCard({
  flightNumber,
  airline,
  departure,
  arrival,
  duration,
  price,
  aircraftType,
  status,
}: FlightCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Time":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Delayed":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow border">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Plane className="w-5 h-5 text-primary" />
            {airline} {flightNumber}
          </CardTitle>
          <Badge className={getStatusColor(status)}>{status}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{aircraftType}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{departure.time}</p>
            <p className="text-sm text-muted-foreground">{departure.airport}</p>
            <p className="text-xs text-muted-foreground/70">{departure.date}</p>
          </div>

          <div className="flex-1 mx-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex-1 h-px bg-border"></div>
              <Plane className="w-4 h-4 text-primary" />
              <div className="flex-1 h-px bg-border"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{duration}</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{arrival.time}</p>
            <p className="text-sm text-muted-foreground">{arrival.airport}</p>
            <p className="text-xs text-muted-foreground/70">{arrival.date}</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-lg font-bold text-green-600 dark:text-green-400">{price}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Economy Class</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
