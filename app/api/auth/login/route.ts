import { NextResponse } from "next/server"

// Mock database for users - this would be imported from a shared location in a real app
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123", // In a real app, this would be properly hashed
    role: "admin",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Regular User",
    email: "user@example.com",
    password: "user123", // In a real app, this would be properly hashed
    role: "user",
    createdAt: new Date().toISOString(),
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.email || !body.password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find user
    const user = users.find((user) => user.email === body.email)

    // Check if user exists and password matches
    if (!user || user.password !== body.password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // In a real app, you would generate a JWT token here
    const token = "mock_jwt_token"

    // Return user without password and with token
    const { password, ...userWithoutPassword } = user
    return NextResponse.json({
      user: userWithoutPassword,
      token,
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}

