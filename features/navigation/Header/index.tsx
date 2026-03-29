import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Heart, User } from "lucide-react";
import { IconButton } from "@/shared/components/Buttons";
import Link from "next/link";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  favoritesCount: number;
  onFavoritesClick: () => void;
}

export function Header({
  cartCount,
  onCartClick,
  favoritesCount,
  onFavoritesClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Carttee
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Deals
            </a>
            <a
              href="#footer"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <IconButton
              className="hidden md:flex"
              onClick={onFavoritesClick}
              badge={favoritesCount}
            >
              <Heart className="w-5 h-5" />
            </IconButton>
            <IconButton onClick={onCartClick} badge={cartCount}>
              <ShoppingCart className="w-5 h-5" />
            </IconButton>
            <IconButton
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="px-4 py-4 space-y-2">
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Deals
            </a>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <IconButton onClick={onFavoritesClick} badge={favoritesCount}>
                <Heart className="w-5 h-5 text-foreground" />
              </IconButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
