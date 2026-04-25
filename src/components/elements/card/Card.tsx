import { useFormatCompactUsd } from '@/hooks/format-hooks/useFormatCompactUsd'
import { useFormatUsd } from '@/hooks/format-hooks/useFormatUsd'
import type { CoinloreTicker } from '@/types/coins.types'
import { coinLogo } from '@/utils/coinLogo'
import { toNum } from '@/utils/toNum'
import { Heart } from 'lucide-react'

export const Card = ({ coin }: { coin: CoinloreTicker }) => {
	const formatUsd = useFormatUsd()
	const formatCompactUsd = useFormatCompactUsd()
	const price = toNum(coin.price_usd)
	const change24h = toNum(coin.percent_change_24h)
	const cap = toNum(coin.market_cap_usd)
	const vol24 = toNum(coin.volume24)
	const isUp = Number.isFinite(change24h) ? change24h >= 0 : null
	return (
		<article
			className={[
				'group relative overflow-hidden rounded-2xl border border-(--border) cursor-pointer',
				'bg-linear-to-b from-(--panel) to-(--panel-2)',
				'p-4 shadow-[0_18px_55px_rgba(0,0,0,0.55)]',
				'transition will-change-transform hover:-translate-y-0.5 hover:border-white/15',
			].join(' ')}
		>
			<div className='pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100'>
				<div className='absolute -left-24 -top-24 size-72 rounded-full bg-white/6 blur-3xl' />
				<div className='absolute -bottom-24 -right-24 size-72 rounded-full bg-white/4 blur-3xl' />
			</div>

			<header className='relative flex items-start gap-3'>
				<div className='grid size-11 shrink-0 place-items-center rounded-2xl border border-white/8 bg-white/5'>
					<img
						className='size-7'
						src={coinLogo(coin.symbol)}
						alt={coin.symbol}
						loading='lazy'
						onError={e => {
							;(e.currentTarget as HTMLImageElement).style.display = 'none'
						}}
					/>
				</div>

				<div className='min-w-0 flex-1'>
					<div className='flex items-center justify-between gap-3'>
						<div className='min-w-0'>
							<div className='truncate text-sm font-semibold tracking-wide'>
								{coin.name}
							</div>
							<div className='mt-0.5 flex items-center gap-2 text-xs text-white/55'>
								<span className='rounded-lg border border-white/10 bg-white/5 px-2 py-0.5'>
									{coin.symbol}
								</span>
								<span className='text-white/35'>•</span>
								<span>#{coin.rank}</span>
							</div>
						</div>

						<div
							className={[
								'flex items-center gap-1 rounded-xl border px-2 py-1 text-xs font-semibold tabular-nums',
								isUp === null
									? 'border-white/10 bg-white/5 text-white/70'
									: isUp
										? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
										: 'border-rose-400/20 bg-rose-400/10 text-rose-200',
							].join(' ')}
						>
							{Number.isFinite(change24h)
								? `${change24h > 0 ? '+' : ''}${change24h.toFixed(2)}%`
								: '—'}
						</div>
					</div>

					<div className='mt-3 flex items-baseline justify-between gap-3'>
						<div className='min-w-0'>
							<div className='text-lg fon t-semibold tracking-tight tabular-nums'>
								{formatUsd(price)}
							</div>
							<div className='mt-0.5 text-xs text-white/45'>Price (USD)</div>
						</div>
					</div>
				</div>
			</header>
			<div className='relative mt-4 grid grid-cols-2 gap-3'>
				<div className='rounded-2xl border border-white/8 bg-white/4 p-3'>
					<div className='text-xs text-white/45'>Market cap</div>
					<div className='mt-1 truncate text-sm font-semibold tabular-nums'>
						{formatCompactUsd(cap)}
					</div>
				</div>
				<div className='rounded-2xl border border-white/8 bg-white/4 p-3'>
					<div className='text-xs text-white/45'>Volume 24h</div>
					<div className='mt-1 truncate text-sm font-semibold tabular-nums'>
						{formatCompactUsd(vol24)}
					</div>
				</div>
			</div>
			<button
				className={[
					'absolute right-5 top-20 inline-flex h-8 w-8 justify-center rounded-full',
					'bg-neutral-900/80 text-neutral-400 opacity-0 ring-1 ring-neutral-700 transition',
					'hover:bg-neutral-800 hover:text-red-400 group-hover:opacity-100',
				].join()}
			>
				<Heart className='h-4 w-4 transition' />
			</button>
		</article>
	)
}
