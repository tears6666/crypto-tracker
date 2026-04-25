export const SkeletonCard = () =>{
	return (
		<div className='animate-pulse rounded-2xl border border-(--border) bg-linear-to-b from-(--panel) to-(--panel-2) p-4 shadow-[0_18px_55px_rgba(0,0,0,0.55)]'>
			<div className='flex items-start gap-3'>
				<div className='size-11 rounded-2xl bg-white/10' />
				<div className='flex-1'>
					<div className='h-4 w-40 rounded bg-white/10' />
					<div className='mt-2 h-3 w-28 rounded bg-white/8' />
					<div className='mt-4 h-5 w-32 rounded bg-white/10' />
				</div>
				<div className='h-7 w-16 rounded-xl bg-white/8' />
			</div>
			<div className='mt-4 grid grid-cols-2 gap-3'>
				<div className='h-16 rounded-2xl bg-white/6' />
				<div className='h-16 rounded-2xl bg-white/6' />
			</div>
		</div>
	)
}