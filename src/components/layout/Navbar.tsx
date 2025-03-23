import React from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isLoggedIn?: boolean;
  cartItemCount?: number;
  userName?: string;
}

const Navbar = ({
  isLoggedIn = false,
  cartItemCount = 0,
  userName = "Guest",
}: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/menu">Menu</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {isLoggedIn ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/logout">Logout</Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/register">Register</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Navigation - Hidden on small screens */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      {
                        title: "Hot Drinks",
                        href: "/menu/hot-drinks",
                        description: "Espresso, Cappuccino, Latte and more",
                      },
                      {
                        title: "Cold Drinks",
                        href: "/menu/cold-drinks",
                        description: "Iced Coffee, Cold Brew, Frappes",
                      },
                      {
                        title: "Pastries",
                        href: "/menu/pastries",
                        description: "Croissants, Muffins, Cookies",
                      },
                      {
                        title: "Breakfast",
                        href: "/menu/breakfast",
                        description: "Sandwiches, Bagels, Oatmeal",
                      },
                    ].map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>

          {/* User Menu */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline-block">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button
                variant="default"
                className="bg-amber-700 hover:bg-amber-800"
                asChild
              >
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
