import CartSection from "@/components/checkout/CartSection";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingForm from "@/components/checkout/ShippingForm";
import { cartItems, orderSummary } from "@/components/data/checkoutData";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/newArrival/Navbar";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <div className="bg-[#f9f9ff] text-[#151c27] text-black">
        <main className=" max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <CartSection items={cartItems} />

              <ShippingForm />
            </div>

            {/* Right */}
            <div className="lg:col-span-4">
              <OrderSummary summary={orderSummary} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
