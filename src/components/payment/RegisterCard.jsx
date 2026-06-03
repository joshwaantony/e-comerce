import {
  ArrowRight,
  Circle,
  LockKeyhole,
  Mail,
  Shield,
  UserRound,
} from "lucide-react";

import { createAccountData } from "@/data/createAccountData";

function Field({ label, placeholder, Icon, half = false }) {
  return (
    <label className={`block ${half ? "" : "w-full"}`}>
      <span className="mb-3 block text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#7d7d82]">
        {label}
      </span>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8b90a0]">
          <Icon size={19} strokeWidth={1.8} />
        </span>
        <input
          type="text"
          defaultValue={placeholder}
          className="h-[56px] w-full rounded-[16px] border border-[#dbe2f0] bg-[#eef2ff] pl-[50px] pr-4 text-[16px] text-[#7c8391] outline-none transition-shadow placeholder:text-[#7c8391] focus:shadow-[0_0_0_3px_rgba(29,100,221,0.08)]"
        />
      </div>
    </label>
  );
}

export default function RegisterCard() {
  return (
    <section className="mx-auto w-full max-w-[500px] rounded-[28px] border border-white/80 bg-white px-8 py-9 shadow-[0_18px_70px_rgba(28,36,58,0.08)] sm:px-10 sm:py-10">
      <div className="text-center">
        <h1 className="text-[28px] font-extrabold tracking-[-0.04em] text-[#1d2433] sm:text-[30px]">
          {createAccountData.title}
        </h1>
        <p className="mt-3 text-[17px] text-[#8a8f99]">{createAccountData.subtitle}</p>
      </div>

      <form className="mt-10 space-y-8">
        <Field
          label={createAccountData.fields.fullName.label}
          placeholder={createAccountData.fields.fullName.placeholder}
          Icon={UserRound}
        />

        <Field
          label={createAccountData.fields.email.label}
          placeholder={createAccountData.fields.email.placeholder}
          Icon={Mail}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={createAccountData.fields.password.label}
            placeholder={createAccountData.fields.password.placeholder}
            Icon={LockKeyhole}
            half
          />

          <Field
            label={createAccountData.fields.confirm.label}
            placeholder={createAccountData.fields.confirm.placeholder}
            Icon={Shield}
            half
          />
        </div>

        <label className="flex cursor-pointer items-center gap-3 pt-1">
          <span className="text-[#d6dbe8]">
            <Circle size={24} strokeWidth={1.6} />
          </span>
          <span className="text-[15px] text-[#5f6673]">
            {createAccountData.consent}{" "}
            <a href="#" className="font-semibold text-[#1d64dd]">
              Terms of Service
            </a>
          </span>
        </label>

        <button
          type="button"
          className="flex h-[58px] w-full items-center justify-center gap-3 rounded-[16px] bg-[#0a5dc7] text-[16px] font-bold text-white shadow-[0_14px_34px_rgba(10,93,199,0.22)] transition-transform hover:-translate-y-0.5"
        >
          <span>{createAccountData.buttonLabel}</span>
          <ArrowRight size={22} strokeWidth={2.3} />
        </button>
      </form>

      <div className="mt-8 border-t border-[#edf0f8] pt-8 text-center text-[18px] text-[#6a7080]">
        {createAccountData.memberText}{" "}
        <a href="#" className="font-bold text-[#1d64dd]">
          {createAccountData.memberLink}
        </a>
      </div>
    </section>
  );
}
