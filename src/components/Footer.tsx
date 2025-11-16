import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-5 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">QuickBite Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Bug Bounty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Help & Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Partner with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Ride with us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Refund & Cancellation</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Offer Terms</a></li>
            </ul>
          </div>

          {/* Available in */}
          <div>
            <h3 className="text-white mb-4">We deliver to</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Delhi</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Bangalore</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Hyderabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">679 cities</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white mb-4">Social Links</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block">
                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="Play Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#FF8A00] to-[#32C96E] w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">QB</span>
            </div>
            <span className="text-white">QuickBite</span>
          </div>
          <p className="text-sm">© 2025 QuickBite Limited</p>
        </div>
      </div>
    </footer>
  );
}
