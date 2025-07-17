import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    system: `You are a helpful travel assistant. When users ask about travel destinations, provide information about places. When they ask about flights, provide flight details. 
    
    For travel places, include information like:
    - Place name and location
    - Description
    - Best time to visit
    - Popular attractions
    - Estimated budget
    
    For flights, include:
    - Flight number
    - Airline
    - Departure and arrival times
    - Duration
    - Price
    - Aircraft type
    
    Always be helpful and provide accurate travel information.`,
  })

  return result.toDataStreamResponse()
}
