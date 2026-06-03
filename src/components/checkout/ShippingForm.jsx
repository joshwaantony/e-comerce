// components/checkout/ShippingForm.jsx

export default function ShippingForm() {
  return (
    <section className="bg-[#F5F5F7] p-8 rounded-[32px]">
      <h2 className="text-3xl font-semibold mb-8">
        Shipping Destination
      </h2>

      <form className="grid md:grid-cols-2 gap-6">
        
        <InputField
          label="Full Name"
          placeholder="John Doe"
        />

        <InputField
          label="Email Address"
          placeholder="john@example.com"
        />

        <div className="md:col-span-2">
          <InputField
            label="Street Address"
            placeholder="5th Avenue, Manhattan"
          />
        </div>

        <InputField
          label="City"
          placeholder="New York"
        />

        <InputField
          label="ZIP Code"
          placeholder="10001"
        />
      </form>
    </section>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
          h-14
          rounded-2xl
          border
          bg-white
          px-5
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}