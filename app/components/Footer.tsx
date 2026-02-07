import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 md:py-16 px-4 md:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-8 md:gap-y-10 mb-12 md:mb-20">
          {/* Logo and Email */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <img src="/logo.png" alt="Finech logo" className="h-6 w-6 md:h-8 md:w-8" />
              <span className="font-bold text-xl md:text-2xl">finech</span>
            </div>
            <Link
              href="mailto:support@finech.com"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              support@finech.com
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-base md:text-lg mb-4 md:mb-6">Company</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-500 text-sm">
              <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
              <li><Link href="/press" className="hover:text-gray-900">Press</Link></li>
              <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-medium text-base md:text-lg mb-4 md:mb-6">Products</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-500 text-sm">
              <li><Link href="/payments" className="hover:text-gray-900">Payments</Link></li>
              <li><Link href="/api-docs" className="hover:text-gray-900">API & Developer Docs</Link></li>
              <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
              <li><Link href="/security" className="hover:text-gray-900">Security</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium text-base md:text-lg mb-4 md:mb-6">Resources</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-500 text-sm">
              <li><Link href="/help" className="hover:text-gray-900">Help Center</Link></li>
              <li><Link href="/faqs" className="hover:text-gray-900">FAQs</Link></li>
              <li><Link href="/case-studies" className="hover:text-gray-900">Case Studies</Link></li>
              <li><Link href="/webinars" className="hover:text-gray-900">Webinars</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-base md:text-lg mb-4 md:mb-6">Legal</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-500 text-sm">
              <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900">Terms of Service</Link></li>
              <li><Link href="/compliance" className="hover:text-gray-900">Compliance</Link></li>
              <li><Link href="/trust" className="hover:text-gray-900">Security & Trust</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-base md:text-lg mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-500 text-sm">
              <li><Link href="/support" className="hover:text-gray-900">Support</Link></li>
              <li><Link href="/partnerships" className="hover:text-gray-900">Partnerships</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-gray-200">
          <div className="text-xs md:text-sm text-gray-500 text-left">
            © 2025 Finech. All Rights Reserved.
          </div>
          <div className="text-sm flex flex-row gap-5">
            <Link href="/login" className="hover:text-gray-900">Login</Link>
            <Link href="/signup" className="hover:text-gray-900">Signup</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}