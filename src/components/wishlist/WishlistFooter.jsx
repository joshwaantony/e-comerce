export default function WishlistFooter() {
  return (
    <footer className="border-t bg-[#F0F3FF]">
      <div className="max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            LUXE
          </h3>

          <p className="mt-2 text-[#5B6472]">
            © 2024 LUXE. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 mt-6 md:mt-0">
          <a>Collection</a>
          <a>Sustainability</a>
          <a>Vendors</a>
          <a>Terms</a>
          <a>Privacy</a>
        </div>
      </div>
    </footer>
  );
}