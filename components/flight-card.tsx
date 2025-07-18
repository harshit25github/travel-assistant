import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, ArrowRight, CalendarDays, DollarSign } from "lucide-react"

interface FlightCardProps {
  airline: string
  departure: string
  arrival: string
  departureTime: string
  arrivalTime: string
  price: string
  date: string
}

export function FlightCard({ airline, departure, arrival, departureTime, arrivalTime, price, date }: FlightCardProps) {
  return (
    <Card className="w-full h-full flex flex-col">
      {" "}
      {/* Added h-full and flex flex-col */}
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Plane className="w-5 h-5" />
          {airline}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        {" "}
        {/* Added flex-grow and flex flex-col justify-between */}
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex flex-col">
              <span className="font-medium">{departureTime}</span>
              <span className="text-muted-foreground">{departure}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-col text-right">
              <span className="font-medium">{arrivalTime}</span>
              <span className="text-muted-foreground">{arrival}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <CalendarDays className="w-4 h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-semibold text-foreground">{price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
