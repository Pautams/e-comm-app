import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button, IconButton } from "@/shared/components/Buttons";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
  deals?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
          {product.badge}
        </div>
      )}
      {discount > 0 && (
        <div className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm">
          -{discount}%
        </div>
      )}

      {/* Wishlist Button */}
      <IconButton className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-slate-900 shadow-md rounded-full p-2">
        <Heart className="w-5 h-5 text-foreground hover:text-destructive hover:fill-destructive transition-colors" />
      </IconButton>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted rounded-xl">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            height={300}
            width={300}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground border border-dashed">
            Image Failed To Load
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-accent fill-accent"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl text-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button onClick={() => onAddToCart(product)} size="sm">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
