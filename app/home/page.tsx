"use client";
import { Hero } from "@/features/Hero";
import { Header } from "@/features/navigation/Header";
import { Footer } from "@/features/navigation/Footer";
import { CartDrawer } from "@/features/navigation/CartDrawer";
import { useCart } from "@/shared/context/CartContext";
import Products from "@/features/Products";

export default function Home(): React.ReactNode {
  const {
    cartCount,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    items,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartDrawerOpen(true)}
      />
      <section id="hero">
        <Hero />
      </section>
      <section id="products">
        <Products />
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
      />
    </div>
  );
}
