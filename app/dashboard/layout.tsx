"use client"

import type React from "react"

import { useState } from "react"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="font-semibold">Modern CRUD App</div>
          </div>
          <UserNav />
        </div>
      </header>
      <div className="flex flex-1">
        {/* Mobile sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-background pt-16 shadow-lg transition-transform duration-300 md:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <DashboardNav onItemClick={() => setSidebarOpen(false)} />
        </aside>

        {/* Desktop sidebar */}
        <aside className="hidden w-64 border-r bg-background md:block">
          <DashboardNav />
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}

