import React from "react";
import HeroSection from "./home/HeroSection";
import OriginStory from "./home/OriginStory";
import FeaturedProducts from "./home/FeaturedProducts";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

interface HomeProps {
  heroProps?: React.ComponentProps<typeof HeroSection>;
  originStoryProps?: React.ComponentProps<typeof OriginStory>;
  featuredProductsProps?: React.ComponentProps<typeof FeaturedProducts>;
}

const Home = ({
  heroProps,
  originStoryProps,
  featuredProductsProps,
}: HomeProps) => {
  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
    // In a real application, this would add the product to the cart state
  };

  const handleViewAllProducts = () => {
    console.log("View all products clicked");
    // In a real application, this would navigate to the products page
    window.location.href = "/menu";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        {/* Add padding to account for fixed navbar */}
        <HeroSection {...heroProps} />
        <div id="origin-story">
          <OriginStory {...originStoryProps} />
        </div>
        <FeaturedProducts
          {...featuredProductsProps}
          onAddToCart={handleAddToCart}
          onViewAllProducts={handleViewAllProducts}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
