"use client";

import { useState } from "react";
import { Eye, EyeOff, Apple, LoaderCircle, Mail } from "lucide-react";

import { loginData } from "@/data/loginData";

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M21.35 11.1H12v2.98h5.36c-.23 1.35-1.05 2.5-2.2 3.27v2.72h3.56c2.08-1.92 3.28-4.75 3.28-8.05 0-.74-.07-1.44-.2-2.09z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.97 0 5.46-.98 7.28-2.66l-3.56-2.72c-.99.66-2.26 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.16v2.8A10 10 0 0 0 12 22z"
        fill="#34A853"
      />
      <path
        d="M5.84 13.14A6 6 0 0 1 5.5 12c0-.39.06-.77.16-1.14V8.06H2.16A10 10 0 0 0 2 12c0 1.62.39 3.16 1.08 4.5l2.76-2.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.99c1.62 0 3.08.56 4.23 1.66l3.17-3.17C17.45 2.63 14.97 1.5 12 1.5 8.16 1.5 4.8 3.7 3.24 6.95l2.76 2.15C7.03 7.87 9.33 5.99 12 5.99z"
        fill="#EA4335"
      />
    </svg>
  );
}

function SocialButton({ icon, label }) {
  return (
    <button
      type="button"
      className="flex h-[52px] items-center justify-center gap-3 rounded-[16px] border border-[#e4e7f0] bg-white text-[14px] font-semibold text-[#374151] transition-colors hover:bg-[#f8faff]"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 1400);
  };

  return (
    <section className="w-full max-w-[480px] rounded-[24px] border border-[#e6e9f2] bg-[rgba(255,255,255,0.82)] px-6 py-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-[20px] sm:px-12">
      <div className="text-center">
        <h1 className="text-[58px] font-black tracking-[-0.08em] text-[#151c27]">
          {loginData.brand}
        </h1>
        <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.3em] text-[#737576]">
          {loginData.tagline}
        </p>
      </div>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block pl-1 text-[13px] font-bold text-[#474c57]">
            {loginData.emailLabel}
          </span>
          <div className="relative">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#9aa0ad]">
              <Mail size={18} strokeWidth={2} />
            </span>
            <input
              type="email"
              placeholder={loginData.emailPlaceholder}
              className="h-[57px] w-full rounded-[18px] border border-[#e4e7f0] bg-[#f9fafb] pl-14 pr-5 text-[16px] text-[#151c27] outline-none transition-colors placeholder:text-[#99a0af] focus:border-[#0058be] focus:bg-white"
            />
          </div>
        </label>

        <label className="block">
          <div className="mb-2 flex items-center justify-between pl-1">
            <span className="text-[13px] font-bold text-[#474c57]">{loginData.passwordLabel}</span>
            <a href="#" className="text-[13px] font-semibold text-[#1d64dd]">
              {loginData.forgotLabel}
            </a>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={loginData.passwordPlaceholder}
              className="h-[57px] w-full rounded-[18px] border border-[#e4e7f0] bg-[#f9fafb] px-5 pr-14 text-[16px] text-[#151c27] outline-none transition-colors placeholder:text-[#99a0af] focus:border-[#0058be] focus:bg-white"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#717887] transition-colors hover:text-[#1d64dd]"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-[58px] w-full items-center justify-center rounded-[16px] bg-[#0a5dc7] text-[16px] font-bold text-white shadow-[0_14px_34px_rgba(10,93,199,0.22)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isSubmitting ? (
            <LoaderCircle className="h-5 w-5 animate-spin" />
          ) : (
            loginData.submitLabel
          )}
        </button>
      </form>

      <div className="mt-8 flex items-center gap-4 text-[#cfd4df]">
        <div className="h-px flex-1 bg-current" />
        <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#737576]">
          {loginData.continueLabel}
        </span>
        <div className="h-px flex-1 bg-current" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <SocialButton icon={<GoogleMark />} label={loginData.googleLabel} />
        <SocialButton icon={<Apple size={19} strokeWidth={2} />} label={loginData.appleLabel} />
      </div>

      <div className="mt-10 text-center">
        <p className="text-[16px] text-[#515764]">
          {loginData.signupText}{" "}
          <a href="/register" className="font-bold text-[#1d64dd]">
            {loginData.signupLink}
          </a>
        </p>
      </div>
    </section>
  );
}
