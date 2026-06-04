import Footer from "@/components/home/Footer";
import Navbar from "@/components/newArrival/Navbar";
import WishlistFooter from "@/components/wishlist/WishlistFooter";
import WishlistGrid from "@/components/wishlist/WishlistGrid";
import WishlistHero from "@/components/wishlist/WishlistHero";

export default function WishlistPage() {
  return (
    <>
      <Navbar />
<div className="bg-[#F9F9FF] min-h-screen">
      <main className="mx-auto max-w-[1280px] px-4 md:px-10 pt-32 pb-20 ">
        <WishlistHero />

        <WishlistGrid />
      </main>

      <Footer/>
      </div>
    </>
  );
}