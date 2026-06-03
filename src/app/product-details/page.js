// app/product-details/page.jsx

import { productDetails } from "@/components/data/productDetails";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/newArrival/Navbar";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";



export default function ProductPage() {
  return (
    <div className="bg-[#f9f9ff] text-[#151c27] min-h-screen">
        <Navbar/>
        <main className=" max-w-7xl mx-auto px-6 py-20 my-6">
      
      {/* Product Section */}
      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Gallery */}
        <div className="lg:col-span-7">
          <ProductGallery images={productDetails.images} />
        </div>

        {/* Info */}
        <div className="lg:col-span-5">
          <ProductInfo product={productDetails} />

          <ProductTabs product={productDetails} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts />
    </main>
      <Footer/>

    </div>
  );
}