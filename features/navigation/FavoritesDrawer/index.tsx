import { Product } from "@/features/cart/ProductCart";
import { X, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (product: Product) => void;
  onAddToCart: (product: Product) => void; 
}

export function FavoritesDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onAddToCart,
}: FavoritesDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-card shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl">Favorites</h2>
            <p className="text-sm text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Heart className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-lg mb-2">No favorites yet</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Hit the heart icon on any product to save it here!
              </p>
              <button
                onClick={onClose}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Browse Products
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-muted/30 p-4 rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
                  <h3 className="text-sm mb-1 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  {/* Add to cart */}
                  <button
                    onClick={() => onAddToCart(item)}
                    className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  {/* Remove from favorites */}
                  <button
                    onClick={() => onRemove(item)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}