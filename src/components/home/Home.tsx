import { TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl text-neutral-300">Welcome to Crypto-Tracker</h1>
      <p className="max-w-[60ch] text-sm text-white/60">
        Track market prices, build your watchlist, and keep an eye on your
        favorite assets in one place.
      </p>

      <div className="mt-4 grid size-20 place-items-center rounded-2xl border border-(--border) bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
        <TrendingUp className="size-9 text-white/80" />
      </div>
    </div>
  )
}