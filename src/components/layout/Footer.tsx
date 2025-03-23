import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-amber-900 text-amber-50 py-12 px-4 md:px-8 w-full",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Logo textClassName="text-white" iconClassName="text-amber-200" />
          </div>
          <p className="text-amber-200 max-w-xs">
            Crafting exceptional coffee experiences since 2010. Every cup tells
            a story.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-300 transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Our Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Locations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <address className="not-italic space-y-3">
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-amber-300 flex-shrink-0" />
              <span className="text-amber-200">
                123 Brew Street, Coffee District,
                <br />
                Beanville, CB1 2AA
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-amber-300 flex-shrink-0" />
              <span className="text-amber-200">(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-amber-300 flex-shrink-0" />
              <span className="text-amber-200">hello@cozycoffee.com</span>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300">
        <p>&copy; {currentYear} Cozy Coffee. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-amber-700">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
