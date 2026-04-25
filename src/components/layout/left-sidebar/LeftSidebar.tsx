import { OVERVIEW_MENU_ITEMS } from '@/data/menu.data'
import { Sparkles } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function LeftSidebar() {
	return (
		<aside className='flex h-full w-[280px] flex-col rounded-2xl border border-(--border) bg-linear-to-b from-(--panel) to-(--panel-2) px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.55)]'>
			<div className='flex items-center gap-3 px-2 pb-4'>
				<div className='grid size-9 place-items-center rounded-xl bg-white/10'>
					<Sparkles className='size-5 text-white/90' />
				</div>
				<div className='text-sm font-semibold tracking-wide'>
					Crypto-Tracker
				</div>
			</div>
			<nav className='mt-5 flex flex-col gap-3'>
				<p className='text-neutral-700 text-[16px]'>Overview</p>
				{OVERVIEW_MENU_ITEMS.map(item => (
					<NavLink
						key={item.id}
						to={item.link}
						className={({ isActive }) =>
							[
								'no-underline outline-none',
								'flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition',
								'focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-4 focus-visible:ring-offset-black/40',
								'active:opacity-90',
								isActive
									? 'border border-(--border) bg-white/8 text-white'
									: 'text-white/70 visited:text-white/70 hover:bg-white/6 hover:text-white',
							].join(' ')
						}
					>
						{item.text}
					</NavLink>
				))}
			</nav>
		</aside>
	)
}
