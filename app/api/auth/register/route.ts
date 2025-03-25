import { NextResponse } from "next/server"

// Mock database for users
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "hashed_password", // In a real app, this would be properly hashed
    role: "admin",
    createdAt: new Date().toISOString(),
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.email === body.email)
    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Create new user (in a real app, you would hash the password)
    const newUser = {
      id: (users.length + 1).toString(),
      name: body.name,
      email: body.email,
      password: body.password, // Should be hashed in a real app
      role: "user", // Default role
      createdAt: new Date().toISOString(),
    }

    // Add to "database"
    users.push(newUser)

    // Return user without password
    const { password, ...userWithoutPassword } = newUser
    return NextResponse.json(userWithoutPassword, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}

