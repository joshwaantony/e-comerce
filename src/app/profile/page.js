import TopNavbar from "@/components/profile/TopNavbar";





import Navbar from "@/components/newArrival/Navbar";
import Sidebar from "@/components/profile/Sidebar";
import ProfileOverview from "@/components/profile/ProfileOverview";
import ContactCard from "@/components/profile/ContactCard";
import PreferencesCard from "@/components/profile/PreferencesCard";
import OrdersTable from "@/components/profile/OrdersTable";
import ShippingAddress from "@/components/profile/ShippingAddress";
import Footer from "@/components/home/Footer";

export default function ProfilePage() {
  return (
    <>
    <Navbar/>
<div className="bg-[#F9F9FF] w-full">
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-4 lg:px-10 ">
        <div className="flex flex-col lg:flex-row gap-10">
          <Sidebar />

          <section className="flex-1 space-y-8">
            <ProfileOverview />

            <div className="grid md:grid-cols-2 gap-8">
              <ContactCard />
              <PreferencesCard />
            </div>

            <OrdersTable />

            <ShippingAddress />
          </section>
        </div>
      </main>
        <Footer />
</div>
    
    </>
  );
}