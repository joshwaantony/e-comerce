// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-20 text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-bold">LUXE</h2>

          <p className="text-gray-500 mt-6">Premium luxury shirt boutique.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Collections</h4>

          <ul className="space-y-3 text-gray-500">
            <li>Silk Series</li>
            <li>Organic Cotton</li>
            <li>Linen Essentials</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>

          <ul className="space-y-3 text-gray-500">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>

          <ul className="space-y-3 text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-16">
        © 2026 LUXE. All rights reserved.
      </div>
    </footer>
  );
}
