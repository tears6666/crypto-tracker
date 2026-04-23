import { Sparkles } from 'lucide-react'

export function LeftSidebar() {
	return (
		<aside className='flex h-full w-[280px] flex-col rounded-2xl border border-(--border) bg-linear-to-b from-(--panel) to-(--panel-2) px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.55)]'>
			<div className='flex items-center gap-3 px-2 pb-4'>
				<div className='grid size-9 place-items-center rounded-xl bg-white/10'>
					<Sparkles className='size-5 text-white/90' />
				</div>
				<div className='text-sm font-semibold tracking-wide'>Crypture</div>
			</div>
		</aside>
	)
}
