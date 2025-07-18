import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

interface RestaurantCardProps {
  name: string
  location: string
  cuisine: string
  priceRange: string
  rating: number
  description: string
}

export function RestaurantCard({ name, location, cuisine, priceRange, rating, description }: RestaurantCardProps) {
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
          <p className="text-md font-medium mb-1">{cuisine}</p>
          <p className="text-sm text-muted-foreground mb-2">{priceRange}</p>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
            {rating} / 5
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
