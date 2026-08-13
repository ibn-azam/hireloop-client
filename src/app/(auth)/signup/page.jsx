import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import SignupForm from "@/components/SignupForm";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Signup",
};

export default function SignupPage() {
  return (
    <main className={`${display.variable} grid min-h-screen w-full lg:grid-cols-2`}>
      {/* Brand panel */}
      <section className="relative hidden overflow-hidden bg-[#181229] lg:flex lg:flex-col lg:justify-between lg:px-12 lg:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 15%, #4B3F8F 0%, transparent 60%), radial-gradient(50% 60% at 85% 90%, #6D5EF5 0%, transparent 55%), linear-gradient(160deg, #181229 0%, #201a3a 100%)",
          }}
        />

        <OrbitMark className="pointer-events-none absolute -right-24 top-1/2 h-[560px] w-[560px] -translate-y-1/2 text-white/[0.14]" />

        <div className="relative z-10 font-[family-name:var(--font-display)] text-lg font-medium tracking-tight text-white/90">
          Nimbus
        </div>

        <div className="relative z-10 max-w-md">
          <p className="font-[family-name:var(--font-display)] text-[2.5rem] font-medium leading-[1.1] tracking-tight text-white">
            One account,
            <br />
            everything in orbit.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Your name, your photo, your work — all synced the moment you sign
            up. No setup steps, nothing to configure later.
          </p>
        </div>

        <p className="relative z-10 text-xs text-white/40">
          © {new Date().getFullYear()} Nimbus. All rights reserved.
        </p>
      </section>

      {/* Form panel */}
      <section className="flex items-center justify-center bg-[#e0e0e1] px-6 py-14">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <span className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight text-[#181229]">
              Nimbus
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[1.75rem] font-medium tracking-tight text-[#181229]">
            Create your account
          </h1>
          <p className="mt-2 text-[15px] text-[#6B6976]">
            Takes less than a minute.
          </p>

          <div className="mt-8">
            <SignupForm />
          </div>

          <p className="mt-8 text-center text-sm text-[#6B6976]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#181229] underline decoration-[#D9D6E8] underline-offset-4 hover:decoration-[#6D5EF5]"
            >
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function OrbitMark({ className }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="130" r="4" fill="currentColor" />
      <circle cx="330" cy="240" r="5" fill="currentColor" />
      <circle cx="90" cy="290" r="3.5" fill="currentColor" />
      <circle cx="200" cy="200" r="4" fill="currentColor" />
    </svg>
  );
}