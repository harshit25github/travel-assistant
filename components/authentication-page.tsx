"use client"

import { Badge } from "@/components/ui/badge"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Info, Mail, User } from "lucide-react"
import { useRouter } from "next/navigation"

export function AuthenticationPage() {
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
      className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden
                 bg-gradient-to-br from-blue-50 via-white to-green-50" // Hardcoded gradient
      style={{
        backdropFilter: `blur(100px)`,
      }}
    >
      {/* Flag icon placeholder */}
      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs border border-gray-200 text-gray-800">
          IN
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full space-y-6">
        {/* Logo and Beta Badge */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            CHEAPOAIR<span className="text-green-600">+</span>
            <span className="text-blue-600">ai</span>
          </h1>
          <Badge className="bg-gray-100 text-gray-800 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">
            <span className="mr-1">⚙️</span> Beta
          </Badge>
        </div>

        {/* Brought to you by */}
        <div className="text-gray-600 text-sm">
          Brought to you by
          <div className="flex justify-center mt-2">
            <span className="font-bold text-3xl text-blue-600">C</span>
            <span className="font-bold text-3xl text-gray-900">H</span>
            <span className="font-bold text-3xl text-green-600">E</span>
            <span className="font-bold text-3xl text-gray-900">A</span>
            <span className="font-bold text-3xl text-blue-600">P</span>
            <span className="font-bold text-3xl text-gray-900">O</span>
            <span className="font-bold text-3xl text-green-600">A</span>
            <span className="font-bold text-3xl text-gray-900">I</span>
            <span className="font-bold text-3xl text-blue-600">R</span>
          </div>
        </div>

        {/* Authentication Options */}
        <div className="w-full space-y-4 mt-8">
          {!showEmailInput ? (
            <>
              <Button
                className="w-full h-14 rounded-full bg-white text-gray-900 text-lg font-semibold shadow-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 border border-gray-200"
                onClick={handleEmailContinue}
              >
                <Mail className="w-6 h-6 text-blue-600" /> Continue with email
              </Button>

              <div className="flex items-center justify-center text-gray-600 text-sm uppercase">
                <Separator className="flex-1 bg-gray-200" />
                <span className="px-4">or</span>
                <Separator className="flex-1 bg-gray-200" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-14 rounded-full bg-white text-gray-900 border-gray-200 text-lg font-semibold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  onClick={() => handleSocialLogin("Google")}
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="Google logo" className="w-6 h-6" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-full bg-white text-gray-900 border-gray-200 text-lg font-semibold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  onClick={handleGuestLogin}
                >
                  <User className="w-6 h-6 text-blue-600" />
                  Guest
                </Button>
              </div>
            </>
          ) : (
            <form
              onSubmit={handleSignIn}
              className="w-full space-y-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign In with Email</h3>
              <div className="grid gap-2">
                <Label htmlFor="email-input" className="text-gray-900 text-left">
                  Email
                </Label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 text-base bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-input" className="text-gray-900 text-left">
                  Password
                </Label>
                <Input
                  id="password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 text-base bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-600"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Button>
              <Button
                variant="link"
                className="w-full text-gray-600 hover:text-blue-600"
                onClick={() => setShowEmailInput(false)}
              >
                Back to options
              </Button>
            </form>
          )}
        </div>

        {/* Terms and Privacy Policy */}
        <p className="text-gray-600 text-xs mt-6">
          By signing up you accept our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      {/* Footer Disclaimer */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-gray-600 text-xs bg-gray-100 p-3 rounded-lg backdrop-blur-sm border border-gray-200">
        <Info className="w-4 h-4 mr-2 text-gray-600" />
        <span>
          Travel Assistant uses OpenAI&apos;s artificial intelligence model, ChatGPT.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more
          </a>
          .
        </span>
      </div>
    </div>
  )
}
