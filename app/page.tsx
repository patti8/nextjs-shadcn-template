import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Modern CRUD Application</h1>
      <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl px-4">
        A complete web application template with authentication, dashboard, and CRUD functionality.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
        <Button className="w-full" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button className="w-full" asChild variant="outline">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </div>
  )
}

