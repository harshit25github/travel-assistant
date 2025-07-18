import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Wifi, Utensils, Dumbbell, ShowerHeadIcon as SwimmingPool } from "lucide-react"

interface HotelCardProps {
  name: string
  location: string
  pricePerNight: string
  rating: number
  amenities: string[]
  description: string // Added description
}

export function HotelCard({ name, location, pricePerNight, rating, amenities, description }: HotelCardProps) {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wi-fi":
        return <Wifi className="w-4 h-4" />
      case "restaurant":
        return <Utensils className="w-4 h-4" />
      case "gym":
        return <Dumbbell className="w-4 h-4" />
      case "pool":
        return <SwimmingPool className="w-4 h-4" />
      case "spa":
        return <Star className="w-4 h-4" /> // Using Star as a placeholder for Spa
      case "concierge":
        return <Star className="w-4 h-4" /> // Using Star as a placeholder for Concierge
      default:
        return null
    }
  }

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
          <p className="text-lg font-semibold mb-2">{pricePerNight}</p>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
            {rating} / 5
          </div>
          <p className="text-sm text-muted-foreground mb-2">{description}</p> {/* Display description */}
          <div className="flex flex-wrap gap-2 mt-2">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
