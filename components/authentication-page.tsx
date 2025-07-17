"use client"

import { Badge } from "@/components/ui/badge"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Info, Mail, User, Sparkles, Luggage } from "lucide-react" // Added Luggage icon
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function AuthenticationPage() {
  const [showEmailInput, setShowEmailInput] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleEmailContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setShowEmailInput(true)
  }

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signing in with:", { email, password })
    alert("Email/Password Sign In functionality not implemented yet.")
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Continuing with ${provider}`)
    alert(`${provider} functionality not implemented yet.`)
  }

  const handleGuestLogin = () => {
    router.push("/")
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden"
      style={{
        background: `radial-gradient(at 20% 50%, hsl(210 90% 95% / 0.3) 0%, transparent 50%), radial-gradient(at 80% 50%, hsl(30 90% 95% / 0.3) 0%, transparent 50%)`, // Blue and Orange gradient
        backdropFilter: `blur(100px)`,
      }}
    >
      {/* Flag icon placeholder */}
      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center text-xs border border-border/30 text-foreground">
          IN
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full space-y-6">
        {/* Logo and Beta Badge */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight relative">
            cheap
            <span className="text-orange-600 dark:text-orange-400 relative inline-block">
              O
              <Luggage className="absolute inset-0 w-full h-full text-orange-600 dark:text-orange-400 opacity-70" />
            </span>
            air<sup className="text-sm align-super">®</sup>
          </h1>
          <Badge className="bg-accent/20 text-foreground border border-border/30 px-3 py-1 rounded-full text-sm font-medium">
            <Sparkles className="mr-1 w-4 h-4" /> Beta
          </Badge>
        </div>

        {/* Brought to you by */}
        <div className="text-muted-foreground text-sm">
          Brought to you by
          <div className="flex justify-center mt-2">
            <span className="font-bold text-3xl text-blue-600 dark:text-blue-400">CHEAPO</span>
            <span className="font-bold text-3xl text-orange-600 dark:text-orange-400">AIR</span>
          </div>
        </div>

        {/* Authentication Options */}
        <div className="w-full space-y-4 mt-8">
          {!showEmailInput ? (
            <>
              <Button
                className="w-full h-14 rounded-full bg-background text-foreground text-lg font-semibold shadow-lg hover:bg-accent transition-colors flex items-center justify-center gap-3 border border-border"
                onClick={handleEmailContinue}
              >
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" /> Continue with email
              </Button>

              <div className="flex items-center justify-center text-muted-foreground text-sm uppercase">
                <Separator className="flex-1 bg-border" />
                <span className="px-4">or</span>
                <Separator className="flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-14 rounded-full bg-background text-foreground border-border text-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-sm"
                  onClick={() => handleSocialLogin("Google")}
                >
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Google logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-full bg-background text-foreground border-border text-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-sm"
                  onClick={handleGuestLogin}
                >
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  Guest
                </Button>
              </div>
            </>
          ) : (
            <form
              onSubmit={handleSignIn}
              className="w-full space-y-4 bg-background p-6 rounded-lg shadow-lg border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Sign In with Email</h3>
              <div className="grid gap-2">
                <Label htmlFor="email-input" className="text-muted-foreground text-left">
                  Email
                </Label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 text-base bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-input" className="text-muted-foreground text-left">
                  Password
                </Label>
                <Input
                  id="password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 text-base bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Sign In
              </Button>
              <Button
                variant="link"
                className="w-full text-muted-foreground hover:text-primary"
                onClick={() => setShowEmailInput(false)}
              >
                Back to options
              </Button>
            </form>
          )}
        </div>

        {/* Terms and Privacy Policy */}
        <p className="text-muted-foreground text-xs mt-6">
          By signing up you accept our{" "}
          <a href="#" className="text-primary hover:underline">
            terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      {/* Footer Disclaimer */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-muted-foreground text-xs bg-background/30 p-3 rounded-lg backdrop-blur-sm border border-border/20">
        <Info className="w-4 h-4 mr-2" />
        <span>
          Travel Assistant uses OpenAI&apos;s artificial intelligence model, ChatGPT.{" "}
          <a href="#" className="text-primary hover:underline">
            Learn more
          </a>
          .
        </span>
      </div>
    </div>
  )
}
