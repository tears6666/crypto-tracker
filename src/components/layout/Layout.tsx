import { LeftSidebar } from '@/components/layout/left-sidebar/LeftSidebar'
import { TopSidebar } from '@/components/layout/top-sidebar/TopSidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<div className='h-dvh overflow-hidden bg-(--app-bg) text-(--text)'>
			<div className='mx-auto flex h-dvh max-w-[1500px] gap-6 px-6 py-6'>
				<LeftSidebar />
				<div className='flex min-h-0 min-w-0 flex-1 flex-col gap-4'>
					<TopSidebar />
					<main className='flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--panel) p-6 scroll-smooth'>
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	)
}
