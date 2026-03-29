"use client";
import { Hero } from "@/features/Hero";
import { Header } from "@/features/navigation/Header";
import { Footer } from "@/features/navigation/Footer";
import { CartDrawer } from "@/features/navigation/CartDrawer";
import { useCart } from "@/shared/context/CartContext";
import Products from "@/features/Products";
import { Product } from "@/features/cart/ProductCart";
import { useState } from "react";
import { toast } from "sonner";
import { FavoritesDrawer } from "@/features/navigation/FavoritesDrawer";

export default function Home(): React.ReactNode {
  const {
    cartCount,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    items,
    updateQuantity,
    removeFromCart,
    addToCart,
  } = useCart();
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isFavDrawerOpen, setIsFavDrawerOpen] = useState(false);

  const handleToggleFavorite = (product: Product) => {
    const isFavorited = favorites.find((p) => p.id === product.id);

    if (isFavorited) {
      toast.error("Removed from favorites!");
    } else {
      toast.success("Added to favorites!");
    }

    setFavorites((prev) =>
      isFavorited
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product],
    );
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartDrawerOpen(true)}
        favoritesCount={favorites.length}
        onFavoritesClick={() => setIsFavDrawerOpen(true)}
      />
      <section id="hero">
        <Hero />
      </section>
      <section id="products">
        <Products
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />{" "}
      <FavoritesDrawer
        isOpen={isFavDrawerOpen}
        onClose={() => setIsFavDrawerOpen(false)}
        items={favorites}
        onRemove={handleToggleFavorite} // 👈 reuse the same toggle — it removes if already favorited
        onAddToCart={(product) => {
          addToCart(product);
          toast.success("Added to cart!");
        }}
      />
    </div>
  );
}
