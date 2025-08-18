export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-red-900 via-orange-700 to-yellow-500 text-white shadow">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-white/20 ring-1 ring-white/30" />
          <div className="leading-tight">
            <div className="text-sm font-semibold uppercase tracking-wide">University of Southeastern Philippines</div>
            <div className="text-[10px] opacity-90">Office of the President</div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
            <span className="i-heroicons-bell">🔔</span>
          </button>
          <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
            <span className="i-heroicons-cog">⚙️</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white/20 ring-1 ring-white/30" />
            <span className="hidden text-sm sm:inline">John Henry Talite</span>
          </div>
        </div>
      </div>
    </header>
  )
}


