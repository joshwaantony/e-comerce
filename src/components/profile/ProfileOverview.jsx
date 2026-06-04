// import Image from "next/image";

// export default function ProfileOverview() {
//   return (
//     <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border flex flex-col md:flex-row justify-between items-center gap-6">
//       <div className="flex items-center gap-6">
//         <Image
//           src="/profile.jpg"
//           alt=""
//           width={96}
//           height={96}
//           className="rounded-full"
//         />

//         <div>
//           <h2 className="text-2xl font-semibold">
//             Julianne Moore
//           </h2>

//           <p className="text-slate-500">
//             Platinum Member since 2021
//           </p>
//         </div>
//       </div>

//       <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         Edit Profile
//       </button>
//     </div>
//   );
// }



export default function ProfileOverview() {
  return (
    <div className="flex items-center justify-between rounded-[32px] border border-[#e5e7eb]/50 bg-white/80 backdrop-blur-xl px-8 py-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full shadow-md">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOSLItIJBWM66akHlXqAjdr3r6NBBwoJMKdxH20jfNxLZhTU3r6QVGVSrDa2am9C-rKF3KCSbk2_y39oIy0L9XSaXPGhPppUjh3oKeEsw9S8Lh92Ev-JGXG6xL-B_w53ZeE15_GvaIzMrIJMy1qTXuf_Bq-rEKBEQtXpMHlu-4VPYXsjCC2X0Yk5IsjoAVs2iJvn4JKGoXGBUo0PvuS1SgfmVknawm15gruZeyVXHTcmlzQJwYV_ZUFmupvvhlxEkvklb76iNvpyM"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-[20px] font-semibold leading-none text-[#151c27]">
            Julianne Moore
          </h2>

          <p className="mt-2 text-[14px] text-[#5b6472]">
            Platinum Member since 2021
          </p>
        </div>
      </div>

      {/* Right */}
      <button
        type="button"
        className="
          h-[40px]
          min-w-[110px]
          bg-[#0058BE]
          px-5
          text-[12px]
          font-semibold
          text-white
          shadow-md
          transition
          hover:bg-[#004da8]
        "
      >
        Edit Profile
      </button>
    </div>
  );
}
