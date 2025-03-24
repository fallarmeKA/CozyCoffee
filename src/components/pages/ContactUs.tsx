import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-8 font-dancing-script text-4xl font-bold text-amber-900 md:text-5xl">
          Contact Us
        </h1>
        <div className="prose max-w-none">
          {/* Content will be added here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
