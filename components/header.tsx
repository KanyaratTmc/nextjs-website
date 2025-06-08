import { Button } from "@/components/ui/button"
import { Search, User, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold">LOGO</div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <Button variant="outline" size="sm" className="text-white border-white">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
