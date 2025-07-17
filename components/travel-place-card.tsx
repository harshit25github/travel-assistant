import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, DollarSign, Star } from "lucide-react"

interface TravelPlaceCardProps {
  name: string
  location: string
  description: string
  bestTimeToVisit: string
  attractions: string[]
  estimatedBudget: string
  rating: number
  imageUrl?: string
}

export function TravelPlaceCard({
  name,
  location,
  description,
  bestTimeToVisit,
  attractions,
  estimatedBudget,
  rating,
  imageUrl,
}: TravelPlaceCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow border">
      <div className="relative">
        <img
          src={imageUrl || `/placeholder.svg?height=200&width=400`}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 border">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          {name}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-foreground">{description}</p>

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Best time:</span>
          <span className="text-sm text-muted-foreground">{bestTimeToVisit}</span>
        </div>

        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Budget:</span>
          <span className="text-sm text-muted-foreground">{estimatedBudget}</span>
        </div>

        <div>
          <p className="text-sm font-medium mb-2 text-foreground">Popular Attractions:</p>
          <div className="flex flex-wrap gap-1">
            {attractions.map((attraction, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {attraction}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
