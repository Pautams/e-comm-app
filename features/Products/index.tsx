import { useState } from "react";

import { Sparkles, TrendingUp, Tag } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Product, ProductCard } from "@/features/cart/ProductCart";
import { CartItem } from "@/shared/context/CartContext";
import { products } from "./mock/mock.data";
import { Button } from "@/shared/components/Buttons";

export default function Products() {
  const [_, setCartItems] = useState<CartItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success("Increased quantity in cart!");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      toast.success("Added to cart!");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const filteredProducts =
    activeFilter === "all"
      ? products
      : activeFilter === "deals"
        ? products.filter((p) => p.deals === true)
        : products.filter(
            (p) =>
              p.category?.toLowerCase().trim() ===
              activeFilter.toLowerCase().trim(),
          );

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" richColors />

      <main className="flex-1">
        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            {/* Title */}
            <div>
              <h2 className="text-3xl mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Discover our handpicked selection of amazing products
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap p-2 w-full sm:w-auto">
              <Button
                variant={activeFilter === "all" ? "primary" : "outline"}
                onClick={() => setActiveFilter("all")}
              >
                All
              </Button>

              <Button
                variant={activeFilter === "deals" ? "primary" : "outline"}
                onClick={() => setActiveFilter("deals")}
              >
                On Sale
              </Button>

              <Button
                variant={activeFilter === "Electronics" ? "primary" : "outline"}
                onClick={() => setActiveFilter("Electronics")}
              >
                Electronics
              </Button>

              <Button
                variant={activeFilter === "Fashion" ? "primary" : "outline"}
                onClick={() => setActiveFilter("Fashion")}
              >
                Fashion
              </Button>

              <Button
                variant={
                  activeFilter === "Home & Living" ? "primary" : "outline"
                }
                onClick={() => setActiveFilter("Home & Living")}
              >
                Home & Living
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="p-3 bg-primary/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  On orders over $50. Fast and reliable delivery to your door.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Tag className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2">Best Prices</h3>
                <p className="text-sm text-muted-foreground">
                  Competitive pricing with regular discounts and special offers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-2">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  30-day money-back guarantee on all products. Shop with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
