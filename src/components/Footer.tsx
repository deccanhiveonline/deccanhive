import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-[#F9C326]/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                {/* White placeholder for custom logo */}
                <img 
                  src="/logo1.png" 
                  alt="Deccan Hive Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-white">DECCAN HIVE</div>
                <div className="text-xs text-[#6E6E6E]">PRIVATE LIMITED</div>
              </div>
            </div>
            <p className="text-[#6E6E6E] mb-6">
              Helping micro and local businesses grow online with 360° digital solutions that deliver real results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/deccanhive.digitalagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F9C326]/10 rounded-full flex items-center justify-center text-[#F9C326] hover:bg-[#F9C326] hover:text-black transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/deccanhive" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F9C326]/10 rounded-full flex items-center justify-center text-[#F9C326] hover:bg-[#F9C326] hover:text-black transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/deccanhive" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F9C326]/10 rounded-full flex items-center justify-center text-[#F9C326] hover:bg-[#F9C326] hover:text-black transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://youtube.com/@deccanhive" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F9C326]/10 rounded-full flex items-center justify-center text-[#F9C326] hover:bg-[#F9C326] hover:text-black transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">QUICK LINKS</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-[#6E6E6E] hover:text-[#F9C326] transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-[#6E6E6E] hover:text-[#F9C326] transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="block text-[#6E6E6E] hover:text-[#F9C326] transition-colors">
                Portfolio
              </Link>
              <Link to="/about" className="block text-[#6E6E6E] hover:text-[#F9C326] transition-colors">
                About Us
              </Link>
              <Link to="/blog" className="block text-[#6E6E6E] hover:text-[#F9C326] transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-[#6E6E6E] hover:text-[#F9C326] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F9C326] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#6E6E6E] leading-relaxed">
                    1-3-50/1/1 Bheem Rao Naga, Secunderabad,<br />
                    Alwal, Hyderabad, Tirumalagiri,<br />
                    Telangana, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F9C326] flex-shrink-0" />
                <a 
                  href="tel:+919063117093" 
                  className="text-[#6E6E6E] hover:text-[#F9C326] transition-colors"
                >
                  +91 90631 17093
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F9C326] flex-shrink-0" />
                <a 
                  href="mailto:deccanhive@gmail.com" 
                  className="text-[#6E6E6E] hover:text-[#F9C326] transition-colors"
                >
                  deccanhive@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6E6E6E]/20 mt-12 pt-8">
          {/* Copyright and Legal Links */}
          <div className="text-center">
            <p className="text-[#6E6E6E] mb-4">© {new Date().getFullYear()} Deccan Hive Pvt Ltd. All rights reserved.</p>

            
            {/* Legal Links - Desktop: beside copyright, Mobile/Tablet: centered below */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-6">
              <Link 
                to="/privacy-policy"
                className="text-[#6E6E6E] hover:text-[#F9C326] transition-colors text-sm underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-conditions"
                className="text-[#6E6E6E] hover:text-[#F9C326] transition-colors text-sm underline underline-offset-2"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
