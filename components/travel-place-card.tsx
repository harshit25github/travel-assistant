import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface TravelPlaceCardProps {
  name: string
  location: string
  description: string
  imageUrl: string
}

export function TravelPlaceCard({ name, location, description, imageUrl }: TravelPlaceCardProps) {
  return (
    <Card className="w-full h-full flex flex-col">
      {" "}
      {/* Added h-full and flex flex-col */}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        {" "}
        {/* Added flex-grow and flex flex-col justify-between */}
        <div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
