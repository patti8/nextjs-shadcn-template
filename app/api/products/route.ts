import { NextResponse } from "next/server"

// Mock database
const products = [
  {
    id: "1",
    name: "Laptop Pro",
    description: "High-performance laptop for professionals",
    category: "Electronics",
    price: 1299.99,
    stock: 45,
    featured: true,
    status: "In Stock",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Smartphone X",
    description: "Latest smartphone with advanced features",
    category: "Electronics",
    price: 899.99,
    stock: 30,
    featured: true,
    status: "In Stock",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    category: "Audio",
    price: 199.99,
    stock: 15,
    featured: false,
    status: "Low Stock",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Smart Watch",
    description: "Fitness and health tracking smartwatch",
    category: "Wearables",
    price: 249.99,
    stock: 0,
    featured: false,
    status: "Out of Stock",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Tablet Mini",
    description: "Compact tablet for entertainment and productivity",
    category: "Electronics",
    price: 499.99,
    stock: 20,
    featured: true,
    status: "In Stock",
    createdAt: new Date().toISOString(),
  },
]

// GET all products
export async function GET(request: Request) {
  // You can add query parameters for filtering, pagination, etc.
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const status = searchParams.get("status")

  let filteredProducts = [...products]

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (status) {
    filteredProducts = filteredProducts.filter((product) => product.status === status)
  }

  return NextResponse.json(filteredProducts)
}

// POST create a new product
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.price) {
      return NextResponse.json({ error: "Name and price are required" }, { status: 400 })
    }

    // Create new product
    const newProduct = {
      id: (products.length + 1).toString(),
      ...body,
      createdAt: new Date().toISOString(),
    }

    // Add to "database"
    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}

