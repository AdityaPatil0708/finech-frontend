export default function Footer() {
  return (
    <footer className="py-16 px-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto r">
        {/* Top Section - Logo and Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-10 mb-16 ">
          {/* Logo and Email */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Finech logo" className="h-8 w-8" />
              <span className="font-bold text-2xl">finech</span>
            </div>
            <a
              href="mailto:support@finech.com"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              support@finech.com
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Payments</a></li>
              <li><a href="#" className="hover:text-gray-900">API & Developer Docs</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Security</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-900">Webinars</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900">Compliance</a></li>
              <li><a href="#" className="hover:text-gray-900">Security & Trust</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Support</a></li>
              <li><a href="#" className="hover:text-gray-900">Partnerships</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Auth Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 ml-10 mr-10">
          <p className="text-gray-500 text-sm">
            © 2025 Finech. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/login" className="text-gray-900 hover:text-gray-600">Login</a>
            <a href="/signup" className="text-gray-900 hover:text-gray-600">Sign Up</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
