import { NextResponse } from "next/server"

// Mock database - this would be imported from a shared location in a real app
let products = [
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
  // ... other products
]

// GET a single product by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}

// PUT update a product
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const body = await request.json()

    const productIndex = products.findIndex((p) => p.id === id)

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Update product
    products[productIndex] = {
      ...products[productIndex],
      ...body,
    }

    return NextResponse.json(products[productIndex])
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}

// DELETE a product
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const productIndex = products.findIndex((p) => p.id === id)

  if (productIndex === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  // Remove from "database"
  const deletedProduct = products[productIndex]
  products = products.filter((p) => p.id !== id)

  return NextResponse.json(deletedProduct)
}

