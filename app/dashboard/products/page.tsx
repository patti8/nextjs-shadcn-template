import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductsTable } from "@/components/products/products-table"
import { Plus } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/dashboard/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>
      <ProductsTable />
    </div>
  )
}

