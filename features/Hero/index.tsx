import { Card } from "@/shared/components/surfaces/Card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/Buttons";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl leading-tight">
              Shop Better.
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Live Better.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Shop the latest trends in fashion, electronics, and home decor.
              Quality products at unbeatable prices, delivered right to your
              door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products">
                <Button
                  size="lg"
                  variant="outline"
                  rightIcon={
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  }
                >
                  Shop Now
                </Button>
              </a>

              {/* <Button variant="outline" size="lg">
                View Collections
              </Button> */}
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl text-primary mb-1">10k+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl text-secondary mb-1">50k+</div>
                <div className="text-sm text-muted-foreground">Customers</div>
              </div>
              <div>
                <div className="text-3xl text-accent mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div> */}
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-6 max-w-md ml-auto">
            <div className="col-span-2">
              <Card
                emoji="💻"
                title="Electronics"
                description="Upgrade your setup"
                bgColor="bg-primary/20"
                className="h-full"
              />
            </div>
            <div className="rotate-[-1deg]">
              <Card
                emoji="🏠"
                title="Home & Living"
                description="Modern comfort"
                bgColor="bg-primary/10"
              />
            </div>

            <div className="rotate-[1deg]">
              <Card
                emoji="👟"
                title="Fashion"
                description="Street-ready fits"
                bgColor="bg-accent/15"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}
