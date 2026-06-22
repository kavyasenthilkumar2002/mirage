'use client'

import { useRouter } from 'next/navigation'

export default function SetupCompletePage() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#bfe9f7] p-4 font-sans sm:p-6">
      {/* Abstract layered background — same system as sign-in: #75C6E1 → #BFE9F7 + mirrored bands */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #75c6e1 0%, #9dd8ef 42%, #bfe9f7 72%, #dff6fc 100%)',
          }}
        />
        <div
          className="absolute origin-top-left"
          style={{
            left: '-20%',
            top: '-10%',
            width: 'min(60vw, 540px)',
            height: '125%',
            borderRadius: '46% 54% 56% 44% / 40% 36% 64% 60%',
            transform: 'rotate(-26deg)',
            background:
              'linear-gradient(160deg, rgba(165, 230, 250, 0.55) 0%, rgba(190, 240, 252, 0.42) 40%, rgba(210, 248, 255, 0.28) 100%)',
          }}
        />
        <div
          className="absolute origin-top-left"
          style={{
            left: '-10%',
            top: '2%',
            width: 'min(44vw, 400px)',
            height: '112%',
            borderRadius: '54% 46% 48% 52% / 46% 50% 54% 46%',
            transform: 'rotate(-20deg)',
            background:
              'linear-gradient(175deg, rgba(255, 255, 255, 0.38) 0%, rgba(230, 248, 255, 0.32) 55%, rgba(200, 240, 252, 0.14) 100%)',
          }}
        />
        <div
          className="absolute origin-top-right"
          style={{
            right: '-20%',
            top: '-10%',
            width: 'min(60vw, 540px)',
            height: '125%',
            borderRadius: '54% 46% 44% 56% / 40% 36% 60% 64%',
            transform: 'rotate(26deg)',
            background:
              'linear-gradient(200deg, rgba(165, 230, 250, 0.55) 0%, rgba(190, 240, 252, 0.42) 40%, rgba(210, 248, 255, 0.28) 100%)',
          }}
        />
        <div
          className="absolute origin-top-right"
          style={{
            right: '-10%',
            top: '2%',
            width: 'min(44vw, 400px)',
            height: '112%',
            borderRadius: '46% 54% 52% 48% / 46% 50% 46% 54%',
            transform: 'rotate(20deg)',
            background:
              'linear-gradient(185deg, rgba(255, 255, 255, 0.38) 0%, rgba(230, 248, 255, 0.32) 55%, rgba(200, 240, 252, 0.14) 100%)',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[min(95vh,920px)] w-[min(68vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-[55%]"
          style={{
            background:
              'radial-gradient(ellipse 68% 62% at 50% 48%, rgba(255, 255, 255, 0.5) 0%, rgba(239, 252, 255, 0.2) 48%, transparent 74%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, transparent 22%, transparent 70%, rgba(255, 255, 255, 0.1) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[460px] rounded-2xl bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.08),0_16px_48px_rgba(15,60,100,0.1)] sm:p-10">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 sm:h-16 sm:w-16"
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-[#0066CC]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h1 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-[#003366] sm:text-[26px]">
          Set up completed
        </h1>

        <p className="mx-auto mt-3 max-w-[380px] text-sm leading-relaxed text-[#666666] sm:text-base">
          Your account has been successfully setup. You can modify at anytime from your account settings.
        </p>

        <button
          type="button"
          onClick={handleGoBack}
          className="mx-auto mt-8 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-800 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="flex shrink-0 -space-x-0.5 text-white" aria-hidden>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 17 8 12l5-5" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 17 8 12l5-5" />
            </svg>
          </span>
          Go back
        </button>
      </div>
    </main>
  )
}
