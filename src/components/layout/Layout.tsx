import { Outlet } from 'react-router-dom'
import { LeftSidebar } from './left-sidebar/LeftSidebar'
import { TopSidebar } from './top-sidebar/TopSidebar'

export function Layout() {
  return (
    <div className="min-h-dvh bg-(--app-bg) text-(--text)">
      <div className="mx-auto flex min-h-dvh max-w-[1500px] gap-6 px-6 py-6">
        <LeftSidebar />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <TopSidebar />
          <main className="flex min-w-0 flex-1 flex-col-reverse rounded-2xl border border-(--border) bg-(--panel) p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
