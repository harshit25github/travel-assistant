"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Info, Mail } from "lucide-react" // Using Mail for email, and placeholders for Google/Apple

// Placeholder for a custom 'CH' icon or logo
const CheapoairCHIcon = () => <span className="font-bold text-xl text-primary">CH</span>

export function AuthenticationPage() {
  const [showEmailInput, setShowEmailInput] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
    alert(`Continuing with ${provider} functionality not implemented yet.`)
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden"
      style={{
        background: `radial-gradient(at 20% 50%, hsl(var(--primary)/0.3) 0%, transparent 50%), radial-gradient(at 80% 50%, hsl(var(--secondary)/0.3) 0%, transparent 50%)`,
        backdropFilter: `blur(100px)`,
      }}
    >
      {/* Flag icon placeholder */}
      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs border border-white/30 text-white">
          🇮🇳
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full space-y-6">
        {/* Logo and Beta Badge */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            CHEAPOAIR<span className="text-secondary">+</span>ai
          </h1>
          <Badge className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm font-medium">
            <span className="mr-1">⚙️</span> Beta
          </Badge>
        </div>

        {/* Brought to you by */}
        <div className="text-white/80 text-sm">
          Brought to you by
          <div className="flex justify-center mt-2">
            <span className="font-bold text-3xl text-primary">C</span>
            <span className="font-bold text-3xl text-white">H</span>
            <span className="font-bold text-3xl text-secondary">E</span>
            <span className="font-bold text-3xl text-white">A</span>
            <span className="font-bold text-3xl text-primary">P</span>
            <span className="font-bold text-3xl text-white">O</span>
            <span className="font-bold text-3xl text-secondary">A</span>
            <span className="font-bold text-3xl text-white">I</span>
            <span className="font-bold text-3xl text-primary">R</span>
          </div>
        </div>

        {/* Authentication Options */}
        <div className="w-full space-y-4 mt-8">
          {!showEmailInput ? (
            <>
              <Button
                className="w-full h-14 rounded-full bg-white text-gray-900 text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
                onClick={handleEmailContinue}
              >
                <Mail className="w-6 h-6 text-primary" /> Continue with email
              </Button>

              <div className="flex items-center justify-center text-white/60 text-sm uppercase">
                <Separator className="flex-1 bg-white/20" />
                <span className="px-4">or</span>
                <Separator className="flex-1 bg-white/20" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-14 rounded-full bg-white/10 text-white border-white/30 text-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  onClick={() => handleSocialLogin("Google")}
                >
                  {/* Placeholder for Google icon */}
                  <img src="/placeholder.svg?height=24&width=24" alt="Google" className="w-6 h-6" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-full bg-white/10 text-white border-white/30 text-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  onClick={() => handleSocialLogin("Apple")}
                >
                  {/* Placeholder for Apple icon */}
                  <img src="/placeholder.svg?height=24&width=24" alt="Apple" className="w-6 h-6" />
                  Apple
                </Button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSignIn} className="w-full space-y-4 bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Sign In with Email</h3>
              <div className="grid gap-2">
                <Label htmlFor="email-input" className="text-white/80 text-left">
                  Email
                </Label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 text-base bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-input" className="text-white/80 text-left">
                  Password
                </Label>
                <Input
                  id="password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 text-base bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
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
                className="w-full text-white/80 hover:text-white"
                onClick={() => setShowEmailInput(false)}
              >
                Back to options
              </Button>
            </form>
          )}
        </div>

        {/* Terms and Privacy Policy */}
        <p className="text-white/60 text-xs mt-6">
          By signing up you accept our{" "}
          <a href="#" className="text-white hover:underline">
            terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="text-white hover:underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      {/* Footer Disclaimer */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-white/60 text-xs bg-black/30 p-3 rounded-lg backdrop-blur-sm">
        <Info className="w-4 h-4 mr-2" />
        <span>
          Travel Assistant uses OpenAI&apos;s artificial intelligence model, ChatGPT.{" "}
          <a href="#" className="text-white hover:underline">
            Learn more
          </a>
          .
        </span>
      </div>
    </div>
  )
}
