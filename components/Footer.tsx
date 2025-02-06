import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";  

const Footer = () => {
  return (
    <footer className="bg-[#fffbf0] shadow-lg py-6 px-8 w-full mt-10 z-20">
      <div className="container mx-auto flex justify-between items-start space-x-10">
        {/* Contact Us */}
        <div className="flex-1 text-left ">
          <p className="font-bold text-[#8b374d] mb-2 text-lg">Contact Us</p>
          <div className="flex items-center text-[#36454f] mb-2">
            <Phone className="mr-2" />
            <span>
            +855 69 93 33 60</span>
          </div>
          <div className="flex items-center text-[#36454f] mb-2">
            <Mail className="mr-2" />
            <span>hi@asurraa.com</span>
          </div>
          <div className="flex items-center text-[#36454f]">
            <MapPin className="mr-2" />
            <span>The Kampus, 502h Preah Monivong Blvd (93), Phnom Penh</span>
          </div>
        </div>

        {/*  Terms & Conditions */}
        <div className="flex-1 text-left">
          <p className="font-bold text-[#8b374d] text-lg mb-2">Terms & Conditions</p>
          <p className="text-[#36454f] text-sm">
            By using our site, you agree to our terms of service. We reserve the right to modify these terms at any time. Please check back periodically for updates.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex-1  ">
          <p className="font-bold text-[#8b374d] mb-2 text-lg">Follow Us</p>
          <div className="flex flex-col ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#ff2a61] mb-2 text-[#36454f]">
              <Facebook className="mr-2" />
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#ff2a61] mb-2 text-[#36454f]">
              <Twitter className="mr-2" />
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#ff2a61] text-[#36454f]">
              <Instagram className="mr-2" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/*Copyright */}
      <div className="text-center text-[#36454f] mt-4">
        <p className="text-sm">&copy; 2025 E-Commerce Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
