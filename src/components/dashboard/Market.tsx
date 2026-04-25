import { Card } from '@/components/elements/card/Card'
import { useFetch } from '@/hooks/useFetch'
import { useMemo, useState } from 'react'
import { SkeletonCard } from '../ui/SkeletonCard'

const PAGE_SIZE = 16

export default function Market() {
	const { data, isLoading, error } = useFetch()
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

	const coins = useMemo(() => data ?? [], [data])
	const visibleCoins = useMemo(
		() => coins.slice(0, visibleCount),
		[coins, visibleCount],
	)
	const canLoadMore = visibleCount < coins.length

	return (
		<div className='flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto scroll-smooth'>
			<header className='flex flex-wrap items-end justify-between gap-3'>
				<div>
					<h1 className='text-2xl font-semibold tracking-tight'>Market</h1>
					<p className='mt-1 text-sm text-white/55'>
						Top assets by market data (Coinlore).
					</p>
				</div>
			</header>

			{error ? (
				<div className='rounded-2xl border border-rose-400/25 bg-rose-400/10 p-4 text-sm text-rose-100'>
					<span className='font-semibold'>Failed to load:</span> {error}
				</div>
			) : null}

			<section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{isLoading
					? Array.from({ length: PAGE_SIZE }).map((_, i) => (
							<SkeletonCard key={i} />
						))
					: visibleCoins.map(coin => <Card key={coin.id} coin={coin} />)}
			</section>

			{!isLoading && !error && canLoadMore ? (
				<div className='flex justify-center'>
					<button
						type='button'
						className='cursor-pointer inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-white/15 hover:bg-white/8'
						onClick={() =>
							setVisibleCount(c => Math.min(c + PAGE_SIZE, coins.length))
						}
					>
						Load more
					</button>
				</div>
			) : null}
		</div>
	)
}
