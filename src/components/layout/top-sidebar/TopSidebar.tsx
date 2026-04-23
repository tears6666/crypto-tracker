
export function TopSidebar() {
  return (
    <header className="flex h-14 items-center justify-between gap-4 rounded-2xl border border-(--border) bg-linear-to-b from-(--panel) to-(--panel-2) px-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 text-sm text-white/55">
        <span>Insight</span>
        <span className="opacity-60">›</span>
        <span className="text-white/90">Market</span>
      </div>
    </header>
  )
}